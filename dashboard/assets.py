from django_assets import Bundle, register

js = Bundle('components/sessions/sessions.js',
            'components/infiniteScroll/infiniteScroll.js',
            'components/userInfo/userInfo.js',
            'components/platforms/platforms.js',
            'components/dashboardPage/dashboardPage.js',
            output='build/dashboard.js')

register('dashboard_js', js)