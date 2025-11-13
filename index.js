// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for fixed header
            behavior: 'smooth'
        });
    });
});



import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dagrgakrvemvbiacgdrr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhZ3JnYWtydmVtdmJpYWNnZHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMTMwMDAsImV4cCI6MjA3ODU4OTAwMH0.NdDKUbH2UsCdEc9jW2Y-Puwt2Y379QA0vnNkRFH6-jw'
const supabase = createClient(supabaseUrl, supabaseKey)