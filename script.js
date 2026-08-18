const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const filterButtons=document.querySelectorAll('.filters button');
const items=document.querySelectorAll('.gallery-item');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;items.forEach(item=>{item.classList.toggle('hidden',filter!=='all'&&item.dataset.cat!==filter)})}));
const lightbox=document.getElementById('lightbox');
const lightboxImg=lightbox?.querySelector('img');
items.forEach(item=>item.addEventListener('click',()=>{const img=item.querySelector('img');lightboxImg.src=img.currentSrc||img.src;lightboxImg.alt=img.alt;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeLightbox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
lightbox?.querySelector('button')?.addEventListener('click',closeLightbox);lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
function sendWhatsApp(e){e.preventDefault();const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const service=document.getElementById('service').value;const message=document.getElementById('message').value.trim();const text=`Hello ALALM ELAKHADAR LANDSCAPING L.L.C.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service||'General enquiry')}%0AProject details: ${encodeURIComponent(message||'Please contact me regarding my project.')}`;window.open(`https://wa.me/971552970812?text=${text}`,'_blank','noopener');return false}
document.getElementById('year').textContent=new Date().getFullYear();
