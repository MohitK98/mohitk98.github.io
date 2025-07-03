// Harry Potter Birthday Card Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const envelope = document.getElementById('envelope');
    const waxSeal = document.getElementById('wax-seal');
    const card = document.getElementById('card');
    const letter = document.getElementById('letter');
    const modal = document.getElementById('gift-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');
    
    // Gift items
    const gift1 = document.getElementById('gift1');
    const gift2 = document.getElementById('gift2');
    const gift3 = document.getElementById('gift3');
    
    // Gift content data
    const giftContent = {
        gift1: {
            title: "📚 Magical Book of Spells",
            description: "A special collection of spells and enchantments, just for you! This book contains all the magical knowledge you'll need for your adventures. Remember, 'It's leviOsa, not levioSA!'",
            image: "📚"
        },
        gift2: {
            title: "🍫 Chocolate Frog",
            description: "A delicious Chocolate Frog from Honeydukes! This magical treat comes with a collectible wizard card. Who knows which famous witch or wizard you'll discover inside?",
            image: "🍫"
        },
        gift3: {
            title: "🪄 Personalized Wand",
            description: "Your very own wand, chosen especially for you! This wand will help you channel your inner magic and cast the most wonderful spells. Remember, 'The wand chooses the wizard.'",
            image: "🪄"
        }
    };
    
    // Sound effects (using Web Audio API)
    let audioContext;
    
    function playMagicalSound() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Create magical particles
    function createMagicalParticles(element) {
        const particles = 15;
        const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD'];
        
        for (let i = 0; i < particles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            
            const rect = element.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            document.body.appendChild(particle);
            
            const angle = (Math.PI * 2 * i) / particles;
            const velocity = 100 + Math.random() * 50;
            const endX = startX + Math.cos(angle) * velocity;
            const endY = startY + Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                document.body.removeChild(particle);
            };
        }
    }
    
    // Wax seal click handler
    waxSeal.addEventListener('click', function() {
        playMagicalSound();
        createMagicalParticles(waxSeal);
        createConfetti();
        
        // Hide the seal and subtitle immediately
        waxSeal.classList.add('clicked');
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            subtitle.classList.add('clicked');
        }
        
        // Add opening animation
        envelope.classList.add('open');
        
        // Show letter content after flap opens
        setTimeout(() => {
            letter.classList.add('visible');
        }, 500);
        
        // Hide letter and show card after delay
        setTimeout(() => {
            letter.style.display = 'none';
            setTimeout(() => {
                envelope.style.display = 'none';
                card.classList.remove('hidden');
                
                // Add entrance animation for card
                card.style.animation = 'cardAppear 1s ease-out';
                
                // Create more magical effects
                createMagicalParticles(card);
                createConfetti();
            }, 500);
        }, 2000);
    });
    
    // Gift item click handlers
    function openGift(giftId) {
        const gift = giftContent[giftId];
        if (!gift) return;
        
        playMagicalSound();
        createMagicalParticles(document.getElementById(giftId));
        
        modalBody.innerHTML = `
            <h3>${gift.title}</h3>
            <div class="gift-image">${gift.image}</div>
            <p>${gift.description}</p>
        `;
        
        modal.classList.remove('hidden');
    }
    
    gift1.addEventListener('click', () => openGift('gift1'));
    gift2.addEventListener('click', () => openGift('gift2'));
    gift3.addEventListener('click', () => openGift('gift3'));
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
        playMagicalSound();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
            playMagicalSound();
        }
    });
    
    // Add hover effects for envelope
    envelope.addEventListener('mouseenter', function() {
        createMagicalParticles(envelope);
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            playMagicalSound();
        }
    });
    
    // Add floating sparkles to the background
    function createFloatingSparkles() {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = window.innerHeight + 'px';
        sparkle.style.fontSize = '20px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1';
        sparkle.style.opacity = '0.6';
        
        document.body.appendChild(sparkle);
        
        const animation = sparkle.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0.6 },
            { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 8000 + Math.random() * 4000,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            document.body.removeChild(sparkle);
        };
    }
    
    // Create sparkles periodically
    setInterval(createFloatingSparkles, 3000);
    
    // Add some initial sparkles
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingSparkles, i * 500);
    }
    
    // Add magical cursor trail effect
    let cursorTrail = [];
    const maxTrailLength = 10;
    
    document.addEventListener('mousemove', function(e) {
        const trailDot = document.createElement('div');
        trailDot.style.position = 'fixed';
        trailDot.style.left = e.clientX + 'px';
        trailDot.style.top = e.clientY + 'px';
        trailDot.style.width = '4px';
        trailDot.style.height = '4px';
        trailDot.style.backgroundColor = '#FFD700';
        trailDot.style.borderRadius = '50%';
        trailDot.style.pointerEvents = 'none';
        trailDot.style.zIndex = '999';
        trailDot.style.opacity = '0.8';
        
        document.body.appendChild(trailDot);
        cursorTrail.push(trailDot);
        
        if (cursorTrail.length > maxTrailLength) {
            const oldDot = cursorTrail.shift();
            if (oldDot && oldDot.parentNode) {
                oldDot.parentNode.removeChild(oldDot);
            }
        }
        
        // Fade out trail dots
        setTimeout(() => {
            if (trailDot.parentNode) {
                trailDot.style.transition = 'opacity 0.5s ease';
                trailDot.style.opacity = '0';
                setTimeout(() => {
                    if (trailDot.parentNode) {
                        trailDot.parentNode.removeChild(trailDot);
                    }
                }, 500);
            }
        }, 100);
    });
    
    // Add magical typing effect to the message
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Initialize the card with a magical entrance
    setTimeout(() => {
        // Add some initial sparkles around the envelope
        createMagicalParticles(envelope);
    }, 1000);
    
    // Add confetti effect for special moments
    function createConfetti() {
        const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#FFA500'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = -10 + 'px';
            confetti.style.width = '10px';
            confetti.style.height = '20px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '2px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            document.body.appendChild(confetti);
            
            const animation = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'ease-in'
            });
            
            animation.onfinish = () => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            };
        }
    }
    
    // Add confetti when card is first opened
    let cardOpened = false;
    waxSeal.addEventListener('click', function() {
        if (!cardOpened) {
            setTimeout(createConfetti, 1500);
            cardOpened = true;
        }
    });
    
    // Add magical hover effects to gift items
    [gift1, gift2, gift3].forEach(gift => {
        gift.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.1)';
            createMagicalParticles(this);
        });
        
        gift.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('🧙‍♀️ Harry Potter Birthday Card loaded successfully! ✨');
    console.log('Click the wax seal to open your magical letter!');
}); 