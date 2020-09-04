require(['gitbook', 'jquery'], function(gitbook, $) {
    var SITES = {

        'twitter': {
            'label': '返回博客',
            'icon': 'fa fa-arrow-left',
            'onClick': function(e) {
                e.preventDefault();
                window.location.href='https://www.agoam.com/notebook';
            }
        },

        'facebook': {
            'label': 'Facebook',
            'icon': '',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://www.facebook.com/sharer/sharer.php?s=100&p[url]='+encodeURIComponent(location.href));
            }
        },

        'google': {
            'label': 'Google+',
            'icon': '',
            'onClick': function(e) {
                e.preventDefault();
                window.open('https://plus.google.com/share?url='+encodeURIComponent(location.href));
            }
        },

        'weibo': {
            'label': 'Weibo',
            'icon': '',
            'onClick': function(e) {
                e.preventDefault();
                window.open('http://service.weibo.com/share/share.php?content=utf-8&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title));
            }
        },

        'instapaper': {
            'label': 'instapaper',
            'icon': '',
            'onClick': function(e) {
                e.preventDefault();
                window.open('htts://www.agoam.com');
            }
        }, 

        'vk': {
            'label': 'vk',
            'icon': 'fa fa-arrow-circle-left',
            'onClick': function(e) {
                e.preventDefault();
                indow.location.href='https://www.agoam.com/notebook';
            }
        }
    }; 



    gitbook.events.bind('start', function(e, config) {
        var opts = config.sharing;

        // Create dropdown menu
        var menu = $.map(opts.all, function(id) {
            var site = SITES[id];

            return {
                text: site.label,
                onClick: site.onClick
            };
        });

        //Create main button with dropdown
        if (menu.length > 0) {
            gitbook.toolbar.createButton({
                icon: '',
                label: 'Share',
                position: 'right',
                dropdown: [menu]
            });
        }

        //Direct actions to share
        $.each(SITES, function(sideId, site) {
            if (!opts[sideId]) return;

            gitbook.toolbar.createButton({
                icon: site.icon,
                label: site.text,
                position: 'right',
                onClick: site.onClick
            });
        });
    });
});
