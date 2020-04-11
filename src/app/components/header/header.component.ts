import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  onLogout() {
    this.router.navigate(['']);
  }

  ngOnInit(): void {

    debugger;
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
       
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top;
          var scrolled = 20;
  
          if ($('#header').length) {
            scrollto -= $('#header').outerHeight()
  
            if (!$('#header').hasClass('header-scrolled')) {
              scrollto += scrolled;
            }
          }
  
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Mobile Navigation
     
    if ($('.nav-menu').length) {
       
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        var isOpen = false;
        if(
          $('body').hasClass('mobile-nav-active')
        ){
          isOpen = true;
        }
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();

        
        // if(
        //   !isOpen
        // ){
        //   $('.mobile-nav d-lg-none').addClass('openMobileNavBar');
        //   // $('.mobile-nav d-lg-none').addClass('mobile-nav-active');
        //   // $('.mobile-nav d-lg-none').addClass('mobile-nav');
        // }else{
        //   $('.mobile-nav d-lg-none').removeClass('openMobileNavBar');
        //   // $('.mobile-nav d-lg-none').removeClass('mobile-nav-active');
        //   // $('.mobile-nav d-lg-none').removeClass('mobile-nav');
        // }
        $('.mobile-nav').toggleClass('openMobileNavBar');
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function(e) {
         
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }

        // debugger;
        
      });
      
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
       
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
     
    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }
   
    // Real view height for mobile devices
     
    if (window.matchMedia("(max-width: 767px)").matches) {
      $('#hero').css({
        height: $(window).height()
      });
    }
 

  }

}
