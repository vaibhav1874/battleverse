import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (email, artistName) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'BattleVerse <onboarding@resend.dev>', // You can change this to your verified domain later
      to: email,
      subject: '🚨 Registration Submitted: BattleVerse Season 2',
      html: `
        <div style="background-color: #050505; color: #ffffff; font-family: sans-serif; padding: 40px; text-align: center; border-radius: 10px;">
          <h1 style="color: #00a67a; font-size: 32px; letter-spacing: 2px;">BATTLEVERSE</h1>
          <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 20px; border: 1px solid #1a1a1a;">
            <h2 style="margin-bottom: 20px;">Wassup, ${artistName}!</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #cccccc;">
              Your registration for <strong>BattleVerse Season 2</strong> has been successfully received. 
              Our team is now auditing your profile and entry.
            </p>
            <div style="margin: 30px 0; padding: 20px; background: #111; border-radius: 12px; border-left: 4px solid #00a67a;">
              <p style="margin: 0; font-weight: bold; color: #00a67a;">NEXT STEPS:</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #888;">Stay active on Discord. Selected warriors will be contacted via email/contact provided.</p>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 40px;">
              This is an automated no-reply mail. See you in the arena.
            </p>
          </div>
          <div style="margin-top: 30px;">
            <a href="https://discord.gg/Mv5Qkq5r" style="color: #00f3ff; text-decoration: none; font-weight: bold;">JOIN THE DISCORD</a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Internal Email Error:', err);
    return { success: false, error: err };
  }
};
