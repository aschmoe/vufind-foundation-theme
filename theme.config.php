<?php
return array(
    'extends' => 'root',
    'css' => array(
        'slider.css',
        'print.css:print'
    ),
    'js' => array(
        'jquery.min.js',
        'jquery.form.js',
        'jquery-ui/js/jquery-ui.js',
        'foundation/foundation.min.js',
        'common.js',
    ),
    'favicon' => 'vufind-favicon.ico',
    'helpers' => array(
        'factories' => array(
            'layoutclass' => function ($sm) {
                $config = $sm->getServiceLocator()->get('VuFind\Config')->get('config');
                $left = !isset($config->Site->sidebarOnLeft)
                    ? false : $config->Site->sidebarOnLeft;
                return new \VuFind\View\Helper\Foundation\LayoutClass($left);
            },
        ),
        'invokables' => array(
            'search' => 'VuFind\View\Helper\Foundation\Search',
        )
    )
);
