export function getPrompt(value: {
  myGig: string;
  proposalTone?: string;
  clientNeeds: string;
  lengthPerference: "professional & persuasive" | "friendly & persuasive";
  outreachType: string;
  additional: string;
}) {
  const upworkPrompt = `Act as an expert freelance proposal writer for Upwork as bid. Based on the following gig or service I offer, craft a highly personalized, persuasive, and professional proposal tailored to a specific client.

Use a friendly yet confident tone that builds trust and clearly communicates how I can solve the client’s problem.

Input Details:
- My Gig/Service: ${value.myGig}
- Client’s Needs or Project Description: ${value.clientNeeds}
- Proposal Tone: ${
    value.proposalTone || "Adjust tone based on gig type"
  }
- Length Preference: ${value.lengthPerference || "short"}

Structure the Proposal With:
1. A warm and professional greeting/introduction.
2. A short paragraph showing empathy and understanding of the client’s goals or challenges.
3. A tailored solution with why I’m a strong fit — include relevant technical language only if appropriate to the client's understanding level.
4. (Optional) Mention of similar past work, results, or testimonials.
5. A strong call to action inviting the client to start the project, schedule a call, or respond with questions.

Make sure the proposal is:
- Easy to read and client-focused
- Adapted to the client’s technical knowledge (non-technical explanations for non-tech clients)
- Professional, friendly, and persuasive — designed to stand out in competitive Upwork bids

${value.additional && `Additional: ${value.additional}`}

Output only the proposal content — no explanations or markdown formatting. `;



const freelance_prompt = `
Act as an expert freelance proposal writer for Upwork. Based on the following gig or service I offer, craft a highly personalized, persuasive, and professional proposal tailored to a specific client.

Use a friendly yet confident tone that builds trust and clearly communicates how I can solve the client’s problem.

Input Details:
- My Gig/Service: ${value.myGig}
- Client’s Needs or Project Description: ${value.clientNeeds}
- Proposal Tone: ${value.proposalTone || "Adjust tone based on gig type"}
- Length Preference: ${value.lengthPerference || "short"}

Structure the Proposal With:
1. A warm and professional greeting/introduction.
2. A short paragraph showing empathy and understanding of the client’s goals or challenges.
3. A tailored solution with why I’m a strong fit — include relevant technical language only if appropriate to the client's understanding level.
4. (Optional) Mention of similar past work, results, or testimonials.
5. A strong call to action inviting the client to start the project, schedule a call, or respond with questions.

Make sure the proposal is:
- Easy to read and client-focused
- Adapted to the client’s technical knowledge (non-technical explanations for non-tech clients)
- Professional, friendly, and persuasive — designed to stand out in competitive Upwork bids

${value.additional && `Additional: ${value.additional}`}

VERY IMPORTANT — Return ONLY valid JSON in the exact format below. Do not include any explanations, markdown, or extra text outside the JSON.
{
  "proposal": "The full generated proposal text here",
  "shortTitle": "A short and catchy title summarizing the proposal",
  "successRate": "Estimated percentage (0-100) of how likely this proposal is to be accepted based on the provided job description"
}
`;



  const emailProposalPrompt = `Act as a professional freelance email proposal writer. Based on the gig or service I offer, write a personalized, persuasive, and professional cold/warm email to a potential client that builds trust and encourages a response.

Use a friendly and respectful tone — not too formal, but confident — and keep the message concise, clear, and value-driven.

Input Details:
- My Gig/Service: ${value.myGig}
- Client’s Needs or Context (if known): ${value.clientNeeds}
- Email Tone: ${
    value.proposalTone || "Adjust tone based on service and target client"
  }
- Length Preference: ${value.lengthPerference || "short"}

Structure the Email As:
1. Subject line that sparks curiosity or directly offers value
2. Warm, personalized opening (e.g., based on their business, website, or pain point)
3. Brief section showing understanding of their needs or challenges
4. Clear explanation of how I can help and why I’m a good fit
5. (Optional) Reference to similar work, quick credibility signal
6. Clear, low-friction call to action (e.g., "Would you be open to a quick call?" or "Can I send over a few ideas?")
7. Friendly sign-off with my name

Ensure the email is:
- Easy to read and casual-professional
- Adapted to the recipient’s technical knowledge (avoid jargon unless necessary)
- Focused on the client’s benefit, not just my skills
- Designed to encourage replies or further conversation

Only output the final email body and subject line — no extra explanation or markdown.

If any additional instructions, context, client industry, or personalization data are added later, please use them to enhance the email.`;


// const freelance_prompt = `You are an expert freelance proposal writer. Your task is to create a compelling, professional, and tailored proposal for a freelance job based on the provided job post and freelancer details. The proposal should grab the client's attention, demonstrate a clear understanding of their needs, and convincingly position the freelancer as the ideal candidate.

// **Input Details**:
// - **Job Post**: ${value.clientNeeds}
// - **Freelancer Details**: ${value.myGig}

// **Instructions**:
// 1. **Structure**:
//    - Start with a professional greeting addressing the client by name (if provided) or "Hi [Client Name]."
//    - Write a brief introduction (1–2 sentences) stating enthusiasm for the project and summarizing the freelancer’s fit.
//    - Demonstrate understanding of the client’s needs or challenges based on the job post (2–3 sentences).
//    - Propose a clear solution, explaining how the freelancer will address the client’s needs using their skills and experience (3–4 sentences).
//    - Highlight the freelancer’s relevant qualifications, including specific skills, past successes, or portfolio examples that align with the job (2–3 sentences).
//    - End with a confident call to action, inviting the client to discuss further or schedule a call (1–2 sentences).
// 2. **Tone and Style**:
//    - Use a professional, confident, and client-focused tone.
//    - Avoid generic phrases like "I’m the best candidate" or overly salesy language.
//    - Adapt the tone slightly to match the job type (e.g., formal for corporate projects, conversational for creative projects).
// 3. **Persuasive Elements**:
//    - Emphasize how the freelancer’s skills solve the client’s specific problems or meet their goals.
//    - Include specific examples or achievements from the freelancer’s experience (if provided) to build credibility.
//    - Show enthusiasm and readiness to start the project.
// 4. **Constraints**:
//    - Keep the proposal concise, between 200–300 words.
//    - Avoid jargon unless relevant to the job post.
//    - Ensure the proposal is grammatically perfect and free of fluff.
// 5. **Output**:
//    - Provide the proposal as plain text, formatted with clear paragraphs.
//    - Do not include placeholders or incomplete sections.

// **Example Output (for reference, do not include in final response)**:
// Dear Client,

// I’m excited to apply for your e-commerce website project, as my 5 years of experience in web development with React and Node.js align perfectly with your needs. Your goal of building a responsive, SEO-optimized site with seamless payment integration is critical for driving sales, and I understand the importance of delivering a user-friendly platform within your 4-week timeline.

// My proposed solution involves designing a modern, responsive e-commerce site using React for a dynamic front-end and Node.js for a robust backend, with integrated payment gateways like Stripe or PayPal. I’ll ensure SEO best practices are applied to boost visibility, drawing on my experience building 10+ e-commerce sites with 100% client satisfaction. For example, I recently delivered a similar project 20% ahead of schedule, enhancing the client’s online sales by 30% (see portfolio: [link]).

// I’m confident I can deliver a high-quality website that meets your needs and exceeds expectations. I’d love to discuss your vision further—please let me know a convenient time for a call!

// Best regards,
// John Doe

// Now, generate a proposal based on the provided job post and freelancer details.`

  if (value.outreachType === "freelance-proposal") {
    return freelance_prompt;
  } else if (value.outreachType === "email") {
    return emailProposalPrompt;
  }
  return upworkPrompt;
}
