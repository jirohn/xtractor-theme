(function (Drupal) {
    Drupal.behaviors.menuToggleBehavior = {
      attach: function (context) {
        let menuToggle = document.getElementById('menu-toggle');
        let mainNavigation = document.getElementById('main-navigation');
  
        menuToggle.addEventListener('click', function () {
          let expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !expanded);
          mainNavigation.hidden = !mainNavigation.hidden;
        });
      }
    };
  })(Drupal);
  