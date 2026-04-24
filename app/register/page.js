'use client';

import { useState, useRef } from 'react';
import styles from './Register.module.css';
import { 
  User, Mic2, Mail, Phone, CheckCircle, 
  Upload, Music, Image as ImageIcon, Sparkles, 
  ArrowRight, ShieldCheck, Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionWrapper from '@/components/MotionWrapper';
import { storage } from '@/lib/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    artistName: '',
    stageName: '',
    email: '',
    contact: '',
    followedBattleverse: false,
    gender: 'Other',
    industryExperience: '',
  });

  const [files, setFiles] = useState({
    photo: null,
    audio: null,
  });

  const [previews, setPreviews] = useState({
    photo: null,
    audioName: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [progress, setProgress] = useState(0);

  const photoInput = useRef(null);
  const audioInput = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      // New limits: 10MB for audio, 2MB for photo
      if (type === 'audio' && file.size > 10 * 1024 * 1024) {
        alert("Audio file too large. Max 10MB allowed for faster processing.");
        return;
      }
      if (type === 'photo' && file.size > 2 * 1024 * 1024) {
        alert("Photo file too large. Max 2MB allowed.");
        return;
      }
      setFiles(prev => ({ ...prev, [type]: file }));
      if (type === 'photo') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews(prev => ({ ...prev, photo: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        setPreviews(prev => ({ ...prev, audioName: file.name }));
      }
    }
  };

  const uploadToFirebase = (file, path) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, path);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(p);
        }, 
        (error) => reject(error), 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!files.photo || !files.audio) {
      alert("Please upload both a photo and an audition audio file.");
      return;
    }

    setLoading(true);
    setProgress(0);
    setStatusMessage('Uploading Photo...');

    try {
      // 1. Upload Photo
      const photoPath = `registrations/photos/${Date.now()}_${files.photo.name}`;
      const photoUrl = await uploadToFirebase(files.photo, photoPath);

      setStatusMessage('Uploading Audio...');
      setProgress(0); // Reset for next file
      // 2. Upload Audio
      const audioPath = `registrations/audio/${Date.now()}_${files.audio.name}`;
      const audioUrl = await uploadToFirebase(files.audio, audioPath);

      setStatusMessage('Finalizing Registration...');
      setProgress(90);

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          photoUrl,
          audioUrl,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setProgress(100);
        setSuccess(true);
      } else {
        throw new Error(result.error || 'Failed to submit registration');
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      alert(`Submission failed: ${error.message}`);
    } finally {
      setLoading(false);
      setStatusMessage('');
      setProgress(0);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <MotionWrapper direction="down">
          <h1 className="neon-text-purple">SEASON 2 <span className="neon-text-blue">REGISTRATION</span></h1>
          <p className={styles.subtitle}>Fill in your details to claim your spot in the next era of BattleVerse.</p>
        </MotionWrapper>
      </header>

      <AnimatePresence>
        {!success ? (
          <motion.div 
            className={`${styles.formCard} glass`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
          >
            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label><User size={14} style={{marginRight: '6px'}}/> Artist Name</label>
                <input 
                  type="text" name="artistName" required 
                  placeholder="Your legal name"
                  value={formData.artistName} onChange={handleInputChange} 
                />
              </div>

              <div className={styles.formGroup}>
                <label><Mic2 size={14} style={{marginRight: '6px'}}/> Stage Name</label>
                <input 
                  type="text" name="stageName" required 
                  placeholder="e.g. Lyrical Shadow"
                  value={formData.stageName} onChange={handleInputChange} 
                />
              </div>

              <div className={styles.formGroup}>
                <label><Mail size={14} style={{marginRight: '6px'}}/> Gmail / Email</label>
                <input 
                  type="email" name="email" required 
                  placeholder="contact@example.com"
                  value={formData.email} onChange={handleInputChange} 
                />
              </div>

              <div className={styles.formGroup}>
                <label><Phone size={14} style={{marginRight: '6px'}}/> Contact</label>
                <input 
                  type="tel" name="contact" required 
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.contact} onChange={handleInputChange} 
                />
              </div>

              <div className={styles.formGroup}>
                <label><User size={14} style={{marginRight: '6px'}}/> Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other / Prefer not to say</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label><Clock size={14} style={{marginRight: '6px'}}/> Experience</label>
                <input 
                  type="text" name="industryExperience" required 
                  placeholder="e.g. 3 years, 6 months"
                  value={formData.industryExperience} onChange={handleInputChange} 
                />
              </div>

              <div className={`${styles.formGroup} ${styles.toggleGroup} fullWidth`}>
                <input 
                  type="checkbox" name="followedBattleverse" id="followed"
                  checked={formData.followedBattleverse} onChange={handleInputChange} 
                />
                <label htmlFor="followed" style={{textTransform: 'none', color: 'white', cursor: 'pointer'}}>
                  Had you followed BattleVerse before?
                </label>
              </div>

              {/* Uploads */}
              <div className={styles.formGroup}>
                <label><ImageIcon size={14} style={{marginRight: '6px'}}/> Profile Photo (Proof)</label>
                <div className={styles.uploadZone} onClick={() => photoInput.current.click()}>
                  <Upload size={24} />
                  <p>{previews.photo ? 'Photo selected' : 'Click to upload photo'}</p>
                  <input 
                    type="file" ref={photoInput} hidden accept="image/*" 
                    onChange={(e) => handleFileChange(e, 'photo')} 
                  />
                  {previews.photo && <div className={styles.filePreview}><CheckCircle size={14}/> Ready</div>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label><Music size={14} style={{marginRight: '6px'}}/> Audition Entry (Audio)</label>
                <div className={styles.uploadZone} onClick={() => audioInput.current.click()}>
                  <Music size={24} />
                  <p>{previews.audioName ? previews.audioName : 'Click to upload audio (Max 30MB)'}</p>
                  <input 
                    type="file" ref={audioInput} hidden accept="audio/*" 
                    onChange={(e) => handleFileChange(e, 'audio')} 
                  />
                  {previews.audioName && <div className={styles.filePreview}><CheckCircle size={14}/> Ready</div>}
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitBtn} glitch-hover`}
                disabled={loading}
              >
                {loading ? (
                  <>{statusMessage} {Math.round(progress)}%</>
                ) : (
                  <>Complete Registration <ArrowRight size={18} style={{marginLeft: '8px'}} /></>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            className={`${styles.successOverlay} glass`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Sparkles size={80} className="neon-text-purple" style={{marginBottom: '24px'}} />
            <h2 className="neon-text-blue">APPLICATION RECEIVED!</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '32px'}}>
              Your bars have been recorded. Our team will review your audition and reach out to you via Gmail.
            </p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
              <button className="btn btn-primary" onClick={() => window.location.href = '/'}>Back to Home</button>
              <button className="btn btn-neon-blue" onClick={() => setSuccess(false)}>New Registration</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{marginTop: '40px', textAlign: 'center', opacity: '0.6'}}>
        <p style={{fontSize: '0.8rem'}}>
          <ShieldCheck size={12} style={{marginRight: '4px', verticalAlign: 'middle'}}/> 
          By registering, you agree to the BattleVerse fighter guidelines and terms of service.
        </p>
      </div>
    </div>
  );
}
