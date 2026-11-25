'use strict';
const english = {
  skip:'Skip to content',aboutNav:'About',projectsNav:'Projects',experienceNav:'Experience',talk:"Let's talk",
  heroOne:'Turning signals',heroTwo:'into investigation.',heroDescription:'Information security grounded in context, analysis and evidence. I work with Wazuh, security event investigation and access controls, drawing on a background in networks and infrastructure.',explore:'Explore projects',resume:'View résumé',focus:'Detection · Response · Infrastructure',
  aboutEyebrow:'01 / ABOUT ME',aboutTitle:'Technical curiosity.\nAnalytical discipline.',aboutOne:'I am Gabriel Christian de Oliveira, an Information Security Analyst. My experience spans L2 support, networking, servers and access management — a foundation I bring to security event investigation and operations.',aboutTwo:'My work with Wazuh includes event collection, queries, dashboards, detection tuning, false-positive analysis and response documentation. This portfolio clearly separates professional experience, lab work and proposals that have not yet been validated.',factStart:'start of my IT career',factEducation:'completed postgraduate programs',factFocus:'professional focus',
  projectsEyebrow:'02 / SELECTED PROJECTS',projectsTitle:'From reasoning\nto evidence.',projectsIntro:'Documented cases, reproducible examples and explicit limitations. No internal company data.',tested:'Tested example',offline:'Offline tool',documentation:'Documentation',lab:'Lab study',projectOne:'A study guide and authentication triage case: detection hypothesis, offline Python analysis, synthetic events and eight automated tests.',projectTwo:'A local tool to create a baseline and identify added, modified or removed files. Includes tests and documentation in English and Portuguese.',projectThree:'Triage guides for authentication, account changes and phishing. Timeline and report templates, available in English and Portuguese.',projectFour:'Educational documentation using Kali, Medusa and isolated lab environments. Defensive recommendations and an evidence checklist distinguish planned work from verified execution.',viewCase:'Explore the case and evidence',viewCode:'Explore the code',viewGuides:'Read the playbooks',viewLab:'Explore the study',labTitle:'Authentication & defense',projectNote:'Synthetic examples and offline tools are not equivalent to production-validated detections. Each repository documents its scope and validation status.',
  experienceEyebrow:'03 / EXPERIENCE',experienceTitle:'Built on infrastructure.\nFocused on security.',fullResume:'Full résumé',dateFrialto:'01/2026 — present',roleSecurity:'Information Security Analyst',expSecurity:'Deployment and maintenance of Wazuh in production, investigation of authentication and account changes, detection tuning, and documentation of response, access, change and backup procedures.',roleNetworks:'Junior Network Analyst',expNetworks:'Windows/Linux operations across on-premises and AWS environments; administration of AD, GPO, Microsoft 365 and Intune. Networking, Sophos, VPNs and VLANs, asset inventory and audit evidence.',roleIT:'IT Analyst',expIT:'L2 support, system monitoring, virtualization and documentation. Administration of servers, AD, GPO, Samba, DNS, permissions, connectivity and security resources.',education:'EDUCATION',postgrad:'Completed postgraduate program',infoSecurity:'Information Security',systemsDegree:'Systems Analysis\nand Development',technologist:'Completed technology degree',
  contactEyebrow:'04 / CONTACT',contactTitle:"Let's start\na conversation.",contactText:'Projects, opportunities and thoughtful conversations about defensive security. Choose the channel that works best for you.',nameLabel:'Your name',emailLabel:'Your email',messageLabel:'Your message',prepareEmail:'Prepare email',formNote:'Email opens in your application for review and sending. On WhatsApp, you also review the message before sending.',
  back:'Back to portfolio',print:'Print / save PDF',resumeTitle:'Gabriel Christian de Oliveira',resumeSubtitle:'Information Security Analyst · Blue Team · SIEM / Infrastructure'
};
const originals = new Map([...document.querySelectorAll('[data-i18n]')].map(el => [el,el.innerText]));
Object.assign(english, {
 languageLabel:'Language',themeLight:'Light theme',themeDark:'Dark theme',location:'Sinop, MT · Brazil',
 focus:'Blue Team · Infrastructure · Red Team labs',professional:'PROFESSIONAL EXPERIENCE',
 skillsEyebrow:'04 / SKILLS',skillsTitle:'Defend with context.\nStudy the adversary.',skillsIntro:'Applied experience and ongoing learning, with the scope of each skill made explicit.',
 workScope:'Professional experience',projectScope:'Personal project',labScope:'Studies & labs',skillInfraTitle:'Networks & infrastructure',
 skillBlue:'Wazuh in production, log collection and correlation, event investigation, detection tuning and response documentation.',
 skillInfra:'Windows/Linux servers, AD, GPO, Microsoft 365, Intune, Sophos, VPNs and VLANs.',
 skillProject:'Offline triage with synthetic data, integrity monitoring and documented investigation playbooks.',
 skillRed:'Authentication studies using Kali and Medusa. Authorized vulnerability assessment in staging is part of my professional experience.',
 contactEyebrow:'05 / CONTACT'
});
let language = 'pt';
function renderText(element,text){const lines=text.split('\n');element.replaceChildren(...lines.flatMap((line,index)=>index?[document.createElement('br'),document.createTextNode(line)]:[document.createTextNode(line)]));}
function setLanguage(next){
  language=next==='en'?'en':'pt'; document.documentElement.lang=language==='en'?'en':'pt-BR';
  originals.forEach((text,el)=>renderText(el,language==='en'?(english[el.dataset.i18n]||text):text));
  document.querySelectorAll('[data-language-content]').forEach(el=>{el.hidden=el.dataset.languageContent!==language;});
  const select=document.getElementById('language');if(select)select.value=language; updateThemeLabel(); document.title=language==='en'?'Gabriel Christian — Blue Team & Information Security':'Gabriel Christian — Blue Team & Segurança da Informação';
  const status=document.getElementById('contact-status');if(status)status.textContent='';
  try{localStorage.setItem('gc-language',language);}catch{}
}
let theme='dark';
function updateThemeLabel(){const toggle=document.getElementById('theme-toggle');if(!toggle)return;const light=theme==='light';toggle.setAttribute('aria-pressed',String(light));toggle.setAttribute('aria-label',language==='en'?(light?'Activate dark theme':'Activate light theme'):(light?'Ativar tema escuro':'Ativar tema claro'));toggle.querySelector('[aria-hidden]').textContent=light?'☾':'☀';toggle.querySelector('.theme-label').textContent=language==='en'?(light?'Dark theme':'Light theme'):(light?'Tema escuro':'Tema claro');}
function setTheme(next){theme=next==='light'?'light':'dark';document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='light'?'#f4f7fb':'#0a101c');updateThemeLabel();try{localStorage.setItem('gc-theme',theme);}catch{}}
try{setTheme(localStorage.getItem('gc-theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'));}catch{setTheme('dark');}
document.getElementById('theme-toggle')?.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
try{setLanguage(new URLSearchParams(location.search).get('lang')||localStorage.getItem('gc-language')||'pt');}catch{setLanguage('pt');}
document.getElementById('language')?.addEventListener('change',event=>setLanguage(event.target.value));
document.getElementById('print-resume')?.addEventListener('click',()=>window.print());
const form=document.getElementById('contact-form');
function message(){
  const name=document.getElementById('contact-name').value.trim();const email=document.getElementById('contact-email').value.trim();const text=document.getElementById('contact-message').value.trim();
  return language==='en'?`Hello Gabriel! My name is ${name}.\n\n${text}\n\nReply email: ${email}`:`Olá, Gabriel! Meu nome é ${name}.\n\n${text}\n\nEmail para resposta: ${email}`;
}
form?.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const subject=language==='en'?'Contact via portfolio — Gabriel Christian':'Contato pelo portfólio — Gabriel Christian';
  window.location.href=`mailto:gchristian.oliveira@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  document.getElementById('contact-status').textContent=language==='en'?'Review and send in your email app. Nothing has been sent by this page.':'Revise e envie no seu aplicativo de email. Esta página não enviou a mensagem.';
});
document.getElementById('whatsapp')?.addEventListener('click',()=>{
  if(!form.reportValidity())return;window.open(`https://wa.me/5512988379666?text=${encodeURIComponent(message())}`,'_blank','noopener,noreferrer');
  document.getElementById('contact-status').textContent=language==='en'?'Review and send your message in WhatsApp.':'Revise e envie sua mensagem no WhatsApp.';
});

// Content is visible by default; only elements entering the viewport are animated.
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-revealed');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.project-card,.timeline-item,.skill-card,.about-grid,.contact-grid').forEach(element=>observer.observe(element));
}
