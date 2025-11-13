document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.querySelector('.claim-btn');
    const aiButton = document.querySelector('.btn-ai');

    // Example of simple interactivity (e.g., claiming a discount)
    claimButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Claim Discount clicked! A modal/popup should appear.');
        // In a real application, you would launch a form or modal here.
        alert('Discount claimed! (Simulated)');
    });
  


    // Example for the AI smart sale button
    aiButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Venta Inteligente AI clicked! Initiating AI process.');
        // Maybe open a chat widget or specific product recommender.
    });

    // Note: The rest of the design is best handled with pure CSS/HTML.
});


// Simple category filter
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.product-card');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active state
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const filter = btn.dataset.filter;
  
        cards.forEach(card => {
          const categories = (card.dataset.category || '').toLowerCase().split(' ');
          const show = filter === 'todos' || categories.includes(filter);
          card.style.display = show ? '' : 'none';
        });
      });
    });
  });

  
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      alert(`Producto añadido al carrito: ${btn.parentElement.querySelector('h3').textContent}`);
    });
  });

  document.querySelector('.buy-btn').addEventListener('click', () => {
    alert("Producto añadido al carrito: Ron Barceló Imperial");
  });

  
  // Example: animate stats on load
document.querySelectorAll('.stat .number').forEach(el => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease';
      el.style.opacity = 1;
    }, 300);
  });

  
  // Example: highlight payment icons on hover
document.querySelectorAll('.payment-icons img').forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform .2s ease';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
  