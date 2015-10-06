


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>plyr/plyr.js at master · Selz/plyr</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Selz/plyr" name="twitter:title" /><meta content="plyr - A simple HTML5 media player" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/5273825?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/5273825?v=3&amp;s=400" property="og:image" /><meta content="Selz/plyr" property="og:title" /><meta content="https://github.com/Selz/plyr" property="og:url" /><meta content="plyr - A simple HTML5 media player" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/Mzg2MzQ0MjpiYjVhNDEyNjBlYTE0MjY2NGZmOGQ5ZGNjOTlhMThlNjoxOTMwZmVkZWRiZTcxNDFlMGQ1OTFjOTEwMDhkMTBhZDRlN2QxZmY3ZTRiMDMwZWRmN2QyYmFhMzkxOGYzNTcx--ca9fd12b0d11b85d9aa6b9c40b38727bdd56c2a1">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5BDDC7C2:7D28:FB6F3F7:561DEECC" name="octolytics-dimension-request_id" /><meta content="3863442" name="octolytics-actor-id" /><meta content="sh0ked" name="octolytics-actor-login" /><meta content="ace6a25aaf7bb3c43a1d48ddc99c2729f8bec1b1f12207e24b739e816f6e052e" name="octolytics-actor-hash" />

<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="Current repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="sh0ked">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

      <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="0ZjLrQMZYclXpb2pX33SRzM2tKGojfzeI/+ZFyEgzG8TxXvAGWL5CVoZwe+pE/9P7HTAIw3uYwC3D+HAsNVrGA==" name="csrf-token" />
    <meta content="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-2a9ef34e65be9a62a9e257383844e3d635d8416ec7b4d40f4c72cbcac03d4cb7.css" integrity="sha256-Kp7zTmW+mmKp4lc4OETj1jXYQW7HtNQPTHLLysA9TLc=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-2636fb226b1998b444ae391afdb526dd51ffc15c99c699d9bb1e2d4086442e30.css" integrity="sha256-Jjb7ImsZmLRErjka/bUm3VH/wVyZxpnZux4tQIZELjA=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="9d9e878b17394d7ba97696c0030d1e51">

      
  <meta name="description" content="plyr - A simple HTML5 media player">
  <meta name="go-import" content="github.com/Selz/plyr git https://github.com/Selz/plyr.git">

  <meta content="5273825" name="octolytics-dimension-user_id" /><meta content="Selz" name="octolytics-dimension-user_login" /><meta content="30794868" name="octolytics-dimension-repository_id" /><meta content="Selz/plyr" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="30794868" name="octolytics-dimension-repository_network_root_id" /><meta content="Selz/plyr" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Selz/plyr/commits/master.atom" rel="alternate" title="Recent Commits to plyr:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Selz/plyr/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/Selz/plyr/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:sh0ked"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
          <span class="mail-status unread"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Selz/plyr">This repository</span>
  </div>
    <a class="dropdown-item" href="/Selz/plyr/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/sh0ked"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@sh0ked" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3863442?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">sh0ked</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/sh0ked" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="imxKH5dqEMw9oZ2VDejThLIrljG/4v1Y3fVqsAr4e4HlDDf47WaLXzqWgT6jzHRZDH+q9qw33YOWRCFgv550Fg==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div class="pagehead repohead instapaper_ignore readability-menu">

      <div class="container">

        <div class="clearfix">
          

<ul class="pagehead-actions">

  <li>
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="DZEFZCl54tgB0CH8fYYVauPBgPMXzc6mPJzX7TopC8/5PZC1rT6X8ZNmAn512vGk/eloLA7LQohr/gwD12qHfg==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="30794868" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/Selz/plyr/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/Selz/plyr/watchers">
          163
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Selz/plyr/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ydrA6hCC1aStyEE6L3sWsArnK54n8w4KtBHiU16jkbqh85LI/cdEKEZiDuSrMatIrdg3smPu2IZpAHe5RPuEHw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Selz/plyr"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Selz/plyr/stargazers">
          3,848
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Selz/plyr/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="fnamhmhGDCcL8s8IN0DZjXiRin3dRaHIBRrBNFMas5T20zqLVavWwrpFB+lAVLPtKd5btoWe8phh1RQoIvgtkw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Selz/plyr"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/Selz/plyr/stargazers">
          3,848
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of Selz/plyr to your account"
              aria-label="Fork your own copy of Selz/plyr to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/Selz/plyr/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/Selz/plyr/network" class="social-count">
      253
    </a>
  </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="mega-octicon octicon-repo"></span>
  <span class="author"><a href="/Selz" class="url fn" itemprop="url" rel="author"><span itemprop="title">Selz</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/Selz/plyr" data-pjax="#js-repo-pjax-container">plyr</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline ">
        <div class="repository-sidebar clearfix">
          
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/Selz/plyr/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/Selz/plyr" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Selz/plyr">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/Selz/plyr/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Selz/plyr/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/Selz/plyr/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /Selz/plyr/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/Selz/plyr/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /Selz/plyr/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/Selz/plyr/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /Selz/plyr/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/Selz/plyr/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /Selz/plyr/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

            <div class="only-with-full-nav">
                
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3 class="text-small"><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Selz/plyr.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="ssh">
  <h3 class="text-small"><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:Selz/plyr.git" readonly="readonly" aria-label="SSH clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3 class="text-small"><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini text-small input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/Selz/plyr" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<div class="clone-options text-small">You can clone with
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="OBCyerS55PmFwo3s7dY6DgxG2mgPs+jiUzZB/e/g39P9wEbQ6MQcr//bAmCpYoHVi8dUQWtIlTX0sdsmNlVMug==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form>, <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/Mp2P+0yMELiE7skfhe9UeZDeZ1zBWi4YfXqEMpf/MAWQOrwg3fxEJHrxdCc+DFSt/9YJn3/2iPbRtBgcHu2lQ==" /></div><button class="btn-link js-clone-selector" data-protocol="ssh" type="submit">SSH</button></form>, or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form is-enabled" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8dMWXq+qz5pcv+akAf7r+nsRa33yA7YgnY7xJeFghnV853ZyeVQPNIGgq91wEd5V6oG+rnJ2tv+VTASYqrRfog==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</div>
  <a href="https://mac.github.com" class="btn btn-sm sidebar-button" title="Save Selz/plyr to your computer and use it in GitHub Desktop." aria-label="Save Selz/plyr to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-desktop-download"></span>
    Clone in Desktop
  </a>

              <a href="/Selz/plyr/archive/master.zip"
                 class="btn btn-sm sidebar-button"
                 aria-label="Download the contents of Selz/plyr as a zip file"
                 title="Download the contents of Selz/plyr as a zip file"
                 rel="nofollow">
                <span class="octicon octicon-cloud-download"></span>
                Download ZIP
              </a>
            </div>
        </div>
        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

          

<a href="/Selz/plyr/blob/66969f1a65ca5bddd128cc18eb724a7f9271d753/dist/plyr.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a932c14e058eb92ad7d5d57a6e4c795f -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Selz/plyr/blob/develop/dist/plyr.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Selz/plyr/blob/master/dist/plyr.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.6/dist/plyr.js"
                 data-name="v1.3.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.6">v1.3.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.5/dist/plyr.js"
                 data-name="v1.3.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.5">v1.3.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.4/dist/plyr.js"
                 data-name="v1.3.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.4">v1.3.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.3/dist/plyr.js"
                 data-name="v1.3.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.3">v1.3.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.2/dist/plyr.js"
                 data-name="v1.3.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.2">v1.3.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.1/dist/plyr.js"
                 data-name="v1.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.1">v1.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.3.0/dist/plyr.js"
                 data-name="v1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0">v1.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.6/dist/plyr.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.5/dist/plyr.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.4/dist/plyr.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.3/dist/plyr.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.2/dist/plyr.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.1/dist/plyr.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.2.0/dist/plyr.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.14/dist/plyr.js"
                 data-name="v1.1.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.14">v1.1.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.13/dist/plyr.js"
                 data-name="v1.1.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.13">v1.1.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.12/dist/plyr.js"
                 data-name="v1.1.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.12">v1.1.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.11/dist/plyr.js"
                 data-name="v1.1.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.11">v1.1.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.10/dist/plyr.js"
                 data-name="v1.1.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.10">v1.1.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.9/dist/plyr.js"
                 data-name="v1.1.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.9">v1.1.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.8/dist/plyr.js"
                 data-name="v1.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.8">v1.1.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.7/dist/plyr.js"
                 data-name="v1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.7">v1.1.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.6/dist/plyr.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.5/dist/plyr.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.4/dist/plyr.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.3/dist/plyr.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.2/dist/plyr.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.1/dist/plyr.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.1.0/dist/plyr.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.31/dist/plyr.js"
                 data-name="v1.0.31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.31">v1.0.31</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.30/dist/plyr.js"
                 data-name="v1.0.30"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.30">v1.0.30</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.29/dist/plyr.js"
                 data-name="v1.0.29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.29">v1.0.29</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.28/dist/plyr.js"
                 data-name="v1.0.28"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.28">v1.0.28</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.27/dist/plyr.js"
                 data-name="v1.0.27"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.27">v1.0.27</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.26/dist/plyr.js"
                 data-name="v1.0.26"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.26">v1.0.26</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.25/dist/plyr.js"
                 data-name="v1.0.25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.25">v1.0.25</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.24/dist/plyr.js"
                 data-name="v1.0.24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.24">v1.0.24</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.23/dist/plyr.js"
                 data-name="v1.0.23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.23">v1.0.23</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.22/dist/plyr.js"
                 data-name="v1.0.22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.22">v1.0.22</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.21/dist/plyr.js"
                 data-name="v1.0.21"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.21">v1.0.21</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.20/dist/plyr.js"
                 data-name="v1.0.20"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.20">v1.0.20</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.19/dist/plyr.js"
                 data-name="v1.0.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.19">v1.0.19</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.18/dist/plyr.js"
                 data-name="v1.0.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.18">v1.0.18</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.17/dist/plyr.js"
                 data-name="v1.0.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.17">v1.0.17</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.16/dist/plyr.js"
                 data-name="v1.0.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.16">v1.0.16</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.15/dist/plyr.js"
                 data-name="v1.0.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.15">v1.0.15</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.14/dist/plyr.js"
                 data-name="v1.0.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.14">v1.0.14</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.13/dist/plyr.js"
                 data-name="v1.0.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.13">v1.0.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.12/dist/plyr.js"
                 data-name="v1.0.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.12">v1.0.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.11/dist/plyr.js"
                 data-name="v1.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.11">v1.0.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.10/dist/plyr.js"
                 data-name="v1.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.10">v1.0.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.9/dist/plyr.js"
                 data-name="v1.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.9">v1.0.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.8/dist/plyr.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.7/dist/plyr.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.6/dist/plyr.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.5/dist/plyr.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.4/dist/plyr.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.3/dist/plyr.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.2/dist/plyr.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.1/dist/plyr.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Selz/plyr/tree/v1.0.0/dist/plyr.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/Selz/plyr/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Selz/plyr" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">plyr</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Selz/plyr/tree/master/dist" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">dist</span></a></span><span class="separator">/</span><strong class="final-path">plyr.js</strong>
    </div>
  </div>


  <div class="new-commit-tease">
      <span class="right">
        <a class="new-commit-tease-sha" href="/Selz/plyr/commit/66969f1a65ca5bddd128cc18eb724a7f9271d753" data-pjax>
          66969f
        </a>
        <time datetime="2015-09-12T23:56:59Z" is="relative-time">Sep 13, 2015</time>
      </span>
      <div>
        <img alt="@SamPotts" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/719092?v=3&amp;s=40" width="20" />
        <a href="/SamPotts" class="user-mention" rel="contributor">SamPotts</a>
          <a href="/Selz/plyr/commit/66969f1a65ca5bddd128cc18eb724a7f9271d753" class="message" data-pjax="true" title="Fix for multiple YouTube instances (Fixes #114)">Fix for multiple YouTube instances (Fixes</a> <a href="https://github.com/Selz/plyr/issues/114" class="issue-link" title="Multiple Youtube videos">#114</a><a href="/Selz/plyr/commit/66969f1a65ca5bddd128cc18eb724a7f9271d753" class="message" data-pjax="true" title="Fix for multiple YouTube instances (Fixes #114)">)</a>
      </div>

    <div class="new-commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@SamPotts" height="24" src="https://avatars2.githubusercontent.com/u/719092?v=3&amp;s=48" width="24" />
            <a href="/SamPotts">SamPotts</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/Selz/plyr/raw/master/dist/plyr.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/Selz/plyr/blame/master/dist/plyr.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/Selz/plyr/commits/master/dist/plyr.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

      <a class="octicon-btn tooltipped tooltipped-nw"
         href="https://mac.github.com"
         aria-label="Open this file in GitHub Desktop"
         data-ga-click="Repository, open with desktop, type:mac">
          <span class="octicon octicon-device-desktop"></span>
      </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Selz/plyr/edit/master/dist/plyr.js" class="inline-form js-update-url-with-hash" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="L1FZZSG6mfOs0KOJqZDGvPSafNI96/7j8S1iSdBGuaJmveLcNp6V6z73NTeDP2ehSJob9H1HIuZF5sw6Bxph0Q==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/Selz/plyr/delete/master/dist/plyr.js" class="inline-form" data-form-nonce="7be1886036b3cd60bcd2f375fc8ff00d9d87dec7" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="CKU+qwHCGEXIM8UA0O0FLzkItumjxmTz9eFd+Sn+o0lfWQSY5xVmqi6MyV6TDsqmhGuVdiMYZjiSWX5Ak7MHsA==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    24.9 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e){&quot;use strict&quot;;function t(){var e=[&#39;&lt;div class=&quot;player-controls&quot;&gt;&#39;,&#39;&lt;div class=&quot;player-progress&quot;&gt;&#39;,&#39;&lt;label for=&quot;seek{id}&quot; class=&quot;sr-only&quot;&gt;Seek&lt;/label&gt;&#39;,&#39;&lt;input id=&quot;seek{id}&quot; class=&quot;player-progress-seek&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; step=&quot;0.5&quot; value=&quot;0&quot; data-player=&quot;seek&quot;&gt;&#39;,&#39;&lt;progress class=&quot;player-progress-played&quot; max=&quot;100&quot; value=&quot;0&quot;&gt;&#39;,&quot;&lt;span&gt;0&lt;/span&gt;% &quot;+C.i18n.played,&quot;&lt;/progress&gt;&quot;,&#39;&lt;progress class=&quot;player-progress-buffer&quot; max=&quot;100&quot; value=&quot;0&quot;&gt;&#39;,&quot;&lt;span&gt;0&lt;/span&gt;% &quot;+C.i18n.buffered,&quot;&lt;/progress&gt;&quot;,&quot;&lt;/div&gt;&quot;,&#39;&lt;span class=&quot;player-controls-left&quot;&gt;&#39;];return o(C.controls,&quot;restart&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;restart&quot;&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-restart&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.restart+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;rewind&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;rewind&quot;&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-rewind&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.rewind+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;play&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;play&quot;&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-play&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.play+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;,&#39;&lt;button type=&quot;button&quot; data-player=&quot;pause&quot;&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-pause&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.pause+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;fast-forward&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;fast-forward&quot;&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-fast-forward&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.forward+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;current-time&quot;)&amp;&amp;e.push(&#39;&lt;span class=&quot;player-time&quot;&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.currentTime+&quot;&lt;/span&gt;&quot;,&#39;&lt;span class=&quot;player-current-time&quot;&gt;00:00&lt;/span&gt;&#39;,&quot;&lt;/span&gt;&quot;),o(C.controls,&quot;duration&quot;)&amp;&amp;e.push(&#39;&lt;span class=&quot;player-time&quot;&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.duration+&quot;&lt;/span&gt;&quot;,&#39;&lt;span class=&quot;player-duration&quot;&gt;00:00&lt;/span&gt;&#39;,&quot;&lt;/span&gt;&quot;),e.push(&quot;&lt;/span&gt;&quot;,&#39;&lt;span class=&quot;player-controls-right&quot;&gt;&#39;),o(C.controls,&quot;mute&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;mute&quot;&gt;&#39;,&#39;&lt;svg class=&quot;icon-muted&quot;&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-muted&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-volume&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.toggleMute+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;volume&quot;)&amp;&amp;e.push(&#39;&lt;label for=&quot;volume{id}&quot; class=&quot;sr-only&quot;&gt;&#39;+C.i18n.volume+&quot;&lt;/label&gt;&quot;,&#39;&lt;input id=&quot;volume{id}&quot; class=&quot;player-volume&quot; type=&quot;range&quot; min=&quot;0&quot; max=&quot;10&quot; value=&quot;5&quot; data-player=&quot;volume&quot;&gt;&#39;),o(C.controls,&quot;captions&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;captions&quot;&gt;&#39;,&#39;&lt;svg class=&quot;icon-captions-on&quot;&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-captions-on&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-captions-off&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.toggleCaptions+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),o(C.controls,&quot;fullscreen&quot;)&amp;&amp;e.push(&#39;&lt;button type=&quot;button&quot; data-player=&quot;fullscreen&quot;&gt;&#39;,&#39;&lt;svg class=&quot;icon-exit-fullscreen&quot;&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-exit-fullscreen&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;svg&gt;&lt;use xlink:href=&quot;#&#39;+C.iconPrefix+&#39;-enter-fullscreen&quot; /&gt;&lt;/svg&gt;&#39;,&#39;&lt;span class=&quot;sr-only&quot;&gt;&#39;+C.i18n.toggleFullscreen+&quot;&lt;/span&gt;&quot;,&quot;&lt;/button&gt;&quot;),e.push(&quot;&lt;/span&gt;&quot;,&quot;&lt;/div&gt;&quot;),e.join(&quot;&quot;)}function n(e,t){C.debug&amp;&amp;window.console&amp;&amp;console[t?&quot;error&quot;:&quot;log&quot;](e)}function r(){var e,t,n,r=navigator.userAgent,a=navigator.appName,s=&quot;&quot;+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf(&quot;Windows NT&quot;)&amp;&amp;-1!==navigator.appVersion.indexOf(&quot;rv:11&quot;)?(a=&quot;IE&quot;,s=&quot;11;&quot;):-1!==(t=r.indexOf(&quot;MSIE&quot;))?(a=&quot;IE&quot;,s=r.substring(t+5)):-1!==(t=r.indexOf(&quot;Chrome&quot;))?(a=&quot;Chrome&quot;,s=r.substring(t+7)):-1!==(t=r.indexOf(&quot;Safari&quot;))?(a=&quot;Safari&quot;,s=r.substring(t+7),-1!==(t=r.indexOf(&quot;Version&quot;))&amp;&amp;(s=r.substring(t+8))):-1!==(t=r.indexOf(&quot;Firefox&quot;))?(a=&quot;Firefox&quot;,s=r.substring(t+8)):(e=r.lastIndexOf(&quot; &quot;)+1)&lt;(t=r.lastIndexOf(&quot;/&quot;))&amp;&amp;(a=r.substring(e,t),s=r.substring(t+1),a.toLowerCase()==a.toUpperCase()&amp;&amp;(a=navigator.appName)),-1!==(n=s.indexOf(&quot;;&quot;))&amp;&amp;(s=s.substring(0,n)),-1!==(n=s.indexOf(&quot; &quot;))&amp;&amp;(s=s.substring(0,n)),o=parseInt(&quot;&quot;+s,10),isNaN(o)&amp;&amp;(s=&quot;&quot;+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:a,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function a(e,t){var n=e.media;if(&quot;video&quot;==e.type)switch(t){case&quot;video/webm&quot;:return!(!n.canPlayType||!n.canPlayType(&#39;video/webm; codecs=&quot;vp8, vorbis&quot;&#39;).replace(/no/,&quot;&quot;));case&quot;video/mp4&quot;:return!(!n.canPlayType||!n.canPlayType(&#39;video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;&#39;).replace(/no/,&quot;&quot;));case&quot;video/ogg&quot;:return!(!n.canPlayType||!n.canPlayType(&#39;video/ogg; codecs=&quot;theora&quot;&#39;).replace(/no/,&quot;&quot;))}else if(&quot;audio&quot;==e.type)switch(t){case&quot;audio/mpeg&quot;:return!(!n.canPlayType||!n.canPlayType(&quot;audio/mpeg;&quot;).replace(/no/,&quot;&quot;));case&quot;audio/ogg&quot;:return!(!n.canPlayType||!n.canPlayType(&#39;audio/ogg; codecs=&quot;vorbis&quot;&#39;).replace(/no/,&quot;&quot;));case&quot;audio/wav&quot;:return!(!n.canPlayType||!n.canPlayType(&#39;audio/wav; codecs=&quot;1&quot;&#39;).replace(/no/,&quot;&quot;))}return!1}function s(e){if(!document.querySelectorAll(&#39;script[src=&quot;&#39;+e+&#39;&quot;]&#39;).length){var t=document.createElement(&quot;script&quot;);t.src=e;var n=document.getElementsByTagName(&quot;script&quot;)[0];n.parentNode.insertBefore(t,n)}}function o(e,t){return Array.prototype.indexOf&amp;&amp;-1!=e.indexOf(t)}function i(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,&quot;\\$1&quot;),&quot;g&quot;),n)}function u(e,t){e.length||(e=[e]);for(var n=e.length-1;n&gt;=0;n--){var r=n&gt;0?t.cloneNode(!0):t,a=e[n],s=a.parentNode,o=a.nextSibling;r.appendChild(a),o?s.insertBefore(r,o):s.appendChild(r)}}function l(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function c(e){e.parentNode.removeChild(e)}function p(e,t){e.insertBefore(t,e.firstChild)}function d(e,t){for(var n in t)e.setAttribute(n,t[n])}function f(e,t,n){if(e)if(e.classList)e.classList[n?&quot;add&quot;:&quot;remove&quot;](t);else{var r=(&quot; &quot;+e.className+&quot; &quot;).replace(/\s+/g,&quot; &quot;).replace(&quot; &quot;+t+&quot; &quot;,&quot;&quot;);e.className=r+(n?&quot; &quot;+t:&quot;&quot;)}}function m(e,t,n,r){var a=t.split(&quot; &quot;);if(e instanceof NodeList)for(var s=0;s&lt;e.length;s++)e[s]instanceof Node&amp;&amp;m(e[s],arguments[1],arguments[2],arguments[3]);else for(var o=0;o&lt;a.length;o++)e[r?&quot;addEventListener&quot;:&quot;removeEventListener&quot;](a[o],n,!1)}function y(e,t,n){e&amp;&amp;m(e,t,n,!0)}function b(e,t,n){e&amp;&amp;m(e,t,n,!1)}function v(e,t){var n=document.createEvent(&quot;MouseEvents&quot;);n.initEvent(t,!0,!0),e.dispatchEvent(n)}function g(e,t){return t=&quot;boolean&quot;==typeof t?t:!e.getAttribute(&quot;aria-pressed&quot;),e.setAttribute(&quot;aria-pressed&quot;,t),t}function h(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function w(e,t){for(var n in t)t[n]&amp;&amp;t[n].constructor&amp;&amp;t[n].constructor===Object?(e[n]=e[n]||{},w(e[n],t[n])):e[n]=t[n];return e}function k(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:&quot;&quot;,element:null,prefix:&quot;&quot;},t=&quot;webkit moz o ms khtml&quot;.split(&quot; &quot;);if(&quot;undefined&quot;!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r&gt;n;n++){if(e.prefix=t[n],&quot;undefined&quot;!=typeof document[e.prefix+&quot;CancelFullScreen&quot;]){e.supportsFullScreen=!0;break}if(&quot;undefined&quot;!=typeof document.msExitFullscreen&amp;&amp;document.msFullscreenEnabled){e.prefix=&quot;ms&quot;,e.supportsFullScreen=!0;break}}return e.supportsFullScreen&amp;&amp;(e.fullScreenEventName=&quot;ms&quot;==e.prefix?&quot;MSFullscreenChange&quot;:e.prefix+&quot;fullscreenchange&quot;,e.isFullScreen=function(e){switch(&quot;undefined&quot;==typeof e&amp;&amp;(e=document.body),this.prefix){case&quot;&quot;:return document.fullscreenElement==e;case&quot;moz&quot;:return document.mozFullScreenElement==e;default:return document[this.prefix+&quot;FullscreenElement&quot;]==e}},e.requestFullScreen=function(e){return&quot;undefined&quot;==typeof e&amp;&amp;(e=document.body),&quot;&quot;===this.prefix?e.requestFullScreen():e[this.prefix+(&quot;ms&quot;==this.prefix?&quot;RequestFullscreen&quot;:&quot;RequestFullScreen&quot;)]()},e.cancelFullScreen=function(){return&quot;&quot;===this.prefix?document.cancelFullScreen():document[this.prefix+(&quot;ms&quot;==this.prefix?&quot;ExitFullscreen&quot;:&quot;CancelFullScreen&quot;)]()},e.element=function(){return&quot;&quot;===this.prefix?document.fullscreenElement:document[this.prefix+&quot;FullscreenElement&quot;]}),e}function x(){var e={supported:function(){try{return&quot;localStorage&quot;in window&amp;&amp;null!==window.localStorage}catch(e){return!1}}()};return e}function T(o){function w(e){if(!ft.usingTextTracks&amp;&amp;&quot;video&quot;===ft.type&amp;&amp;ft.supported.full){for(ft.subcount=0,e=&quot;number&quot;==typeof e?e:ft.media.currentTime;A(ft.captions[ft.subcount][0])&lt;e.toFixed(1);)if(ft.subcount++,ft.subcount&gt;ft.captions.length-1){ft.subcount=ft.captions.length-1;break}if(ft.media.currentTime.toFixed(1)&gt;=E(ft.captions[ft.subcount][0])&amp;&amp;ft.media.currentTime.toFixed(1)&lt;=A(ft.captions[ft.subcount][0])){ft.currentCaption=ft.captions[ft.subcount][1];var t=ft.currentCaption.trim();ft.captionsContainer.innerHTML!=t&amp;&amp;(ft.captionsContainer.innerHTML=&quot;&quot;,ft.captionsContainer.innerHTML=t)}else ft.captionsContainer.innerHTML=&quot;&quot;}}function T(){ft.buttons.captions&amp;&amp;(f(ft.container,C.classes.captions.enabled,!0),C.captions.defaultActive&amp;&amp;(f(ft.container,C.classes.captions.active,!0),g(ft.buttons.captions,!0)))}function E(e){var t=[];return t=e.split(&quot; --&gt; &quot;),P(t[0])}function A(e){var t=[];return t=e.split(&quot; --&gt; &quot;),P(t[1])}function P(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(&quot;,&quot;),r=n[0].split(&quot;:&quot;),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function N(e){return ft.container.querySelectorAll(e)}function M(e){return N(e)[0]}function I(){try{return window.self!==window.top}catch(e){return!0}}function L(){var e=C.html;if(n(&quot;Injecting custom controls.&quot;),e||(e=t()),e=i(e,&quot;{seektime}&quot;,C.seekTime),e=i(e,&quot;{id}&quot;,Math.floor(1e4*Math.random())),ft.container.insertAdjacentHTML(&quot;beforeend&quot;,e),C.tooltips)for(var r=N(C.selectors.labels),a=r.length-1;a&gt;=0;a--){var s=r[a];f(s,C.classes.hidden,!1),f(s,C.classes.tooltip,!0)}}function O(){try{return ft.controls=M(C.selectors.controls),ft.buttons={},ft.buttons.seek=M(C.selectors.buttons.seek),ft.buttons.play=M(C.selectors.buttons.play),ft.buttons.pause=M(C.selectors.buttons.pause),ft.buttons.restart=M(C.selectors.buttons.restart),ft.buttons.rewind=M(C.selectors.buttons.rewind),ft.buttons.forward=M(C.selectors.buttons.forward),ft.buttons.fullscreen=M(C.selectors.buttons.fullscreen),ft.buttons.mute=M(C.selectors.buttons.mute),ft.buttons.captions=M(C.selectors.buttons.captions),ft.checkboxes=N(&#39;[type=&quot;checkbox&quot;]&#39;),ft.progress={},ft.progress.container=M(C.selectors.progress.container),ft.progress.buffer={},ft.progress.buffer.bar=M(C.selectors.progress.buffer),ft.progress.buffer.text=ft.progress.buffer.bar&amp;&amp;ft.progress.buffer.bar.getElementsByTagName(&quot;span&quot;)[0],ft.progress.played={},ft.progress.played.bar=M(C.selectors.progress.played),ft.progress.played.text=ft.progress.played.bar&amp;&amp;ft.progress.played.bar.getElementsByTagName(&quot;span&quot;)[0],ft.volume=M(C.selectors.buttons.volume),ft.duration=M(C.selectors.duration),ft.currentTime=M(C.selectors.currentTime),ft.seekTime=N(C.selectors.seekTime),!0}catch(e){return n(&quot;It looks like there&#39;s a problem with your controls html. Bailing.&quot;,!0),ft.media.setAttribute(&quot;controls&quot;,&quot;&quot;),!1}}function q(){if(ft.buttons.play){var e=ft.buttons.play.innerText||C.i18n.play;&quot;undefined&quot;!=typeof C.title&amp;&amp;C.title.length&amp;&amp;(e+=&quot;, &quot;+C.title),ft.buttons.play.setAttribute(&quot;aria-label&quot;,e)}}function V(){if(!ft.media)return n(&quot;No audio or video element found!&quot;,!0),!1;if(ft.supported.full&amp;&amp;(ft.media.removeAttribute(&quot;controls&quot;),f(ft.container,C.classes.type.replace(&quot;{0}&quot;,ft.type),!0),f(ft.container,C.classes.stopped,null===ft.media.getAttribute(&quot;autoplay&quot;)),ft.browser.ios&amp;&amp;f(ft.container,&quot;ios&quot;,!0),&quot;video&quot;===ft.type)){var e=document.createElement(&quot;div&quot;);e.setAttribute(&quot;class&quot;,C.classes.videoWrapper),u(ft.media,e),ft.videoContainer=e}&quot;youtube&quot;==ft.type&amp;&amp;H(ft.media.getAttribute(&quot;data-video-id&quot;)),null!==ft.media.getAttribute(&quot;autoplay&quot;)&amp;&amp;D()}function H(e){for(var t=N(&#39;[id^=&quot;youtube&quot;]&#39;),n=t.length-1;n&gt;=0;n--)c(t[n]);var r=document.createElement(&quot;div&quot;);r.setAttribute(&quot;id&quot;,&quot;youtube-&quot;+Math.floor(1e4*Math.random())),ft.media.appendChild(r),f(ft.media,C.classes.videoWrapper,!0),f(ft.media,C.classes.embedWrapper,!0),&quot;object&quot;==typeof YT?R(e,r):(s(&quot;https://www.youtube.com/iframe_api&quot;),S.youtube.push(function(){R(e,r)}),window.onYouTubeIframeAPIReady=function(){for(var e=S.youtube.length-1;e&gt;=0;e--)S.youtube[e](),S.youtube.splice(e,1)})}function R(e,t){n(&quot;YouTube API Ready&quot;),&quot;timer&quot;in ft||(ft.timer={}),ft.embed=new YT.Player(t.id,{videoId:e,playerVars:{autoplay:0,controls:ft.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:C.captions.defaultActive?1:0,cc_lang_pref:&quot;en&quot;,wmode:&quot;transparent&quot;,modestbranding:1,disablekb:1},events:{onReady:function(e){var t=e.target;ft.media.play=function(){t.playVideo()},ft.media.pause=function(){t.pauseVideo()},ft.media.stop=function(){t.stopVideo()},ft.media.duration=t.getDuration(),ft.media.paused=!0,ft.media.currentTime=t.getCurrentTime(),ft.media.muted=t.isMuted(),v(ft.media,&quot;timeupdate&quot;),window.clearInterval(ft.timer.buffering),ft.timer.buffering=window.setInterval(function(){ft.media.buffered=t.getVideoLoadedFraction(),v(ft.media,&quot;progress&quot;),1===ft.media.buffered&amp;&amp;window.clearInterval(ft.timer.buffering)},200),ft.supported.full&amp;&amp;(ft.container.querySelectorAll(C.selectors.controls).length||dt(),C.displayDuration&amp;&amp;rt())},onStateChange:function(e){var t=e.target;switch(window.clearInterval(ft.timer.playing),e.data){case 0:ft.media.paused=!0,v(ft.media,&quot;ended&quot;);break;case 1:ft.media.paused=!1,v(ft.media,&quot;play&quot;),ft.timer.playing=window.setInterval(function(){ft.media.currentTime=t.getCurrentTime(),v(ft.media,&quot;timeupdate&quot;)},200);break;case 2:ft.media.paused=!0,v(ft.media,&quot;pause&quot;)}}}})}function B(){if(&quot;video&quot;===ft.type){ft.videoContainer.insertAdjacentHTML(&quot;afterbegin&quot;,&#39;&lt;div class=&quot;&#39;+C.selectors.captions.replace(&quot;.&quot;,&quot;&quot;)+&#39;&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;&#39;),ft.captionsContainer=M(C.selectors.captions).querySelector(&quot;span&quot;),ft.usingTextTracks=!1,ft.media.textTracks&amp;&amp;(ft.usingTextTracks=!0);for(var e,t=&quot;&quot;,r=ft.media.childNodes,a=0;a&lt;r.length;a++)&quot;track&quot;===r[a].nodeName.toLowerCase()&amp;&amp;(e=r[a].kind,(&quot;captions&quot;===e||&quot;subtitles&quot;===e)&amp;&amp;(t=r[a].getAttribute(&quot;src&quot;)));if(ft.captionExists=!0,&quot;&quot;===t?(ft.captionExists=!1,n(&quot;No caption track found.&quot;)):n(&quot;Caption track found; URI: &quot;+t),ft.captionExists){for(var s=ft.media.textTracks,o=0;o&lt;s.length;o++)s[o].mode=&quot;hidden&quot;;if(T(ft),(&quot;IE&quot;===ft.browser.name&amp;&amp;ft.browser.version&gt;=10||&quot;Firefox&quot;===ft.browser.name&amp;&amp;ft.browser.version&gt;=31||&quot;Chrome&quot;===ft.browser.name&amp;&amp;ft.browser.version&gt;=43||&quot;Safari&quot;===ft.browser.name&amp;&amp;ft.browser.version&gt;=7)&amp;&amp;(n(&quot;Detected unsupported browser for HTML5 captions. Using fallback.&quot;),ft.usingTextTracks=!1),ft.usingTextTracks){n(&quot;TextTracks supported.&quot;);for(var i=0;i&lt;s.length;i++){var u=s[i];(&quot;captions&quot;===u.kind||&quot;subtitles&quot;===u.kind)&amp;&amp;y(u,&quot;cuechange&quot;,function(){ft.captionsContainer.innerHTML=&quot;&quot;,this.activeCues[0]&amp;&amp;this.activeCues[0].hasOwnProperty(&quot;text&quot;)&amp;&amp;ft.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim())})}}else if(n(&quot;TextTracks not supported so rendering captions manually.&quot;),ft.currentCaption=&quot;&quot;,ft.captions=[],&quot;&quot;!==t){var l=new XMLHttpRequest;l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var e,t=[],r=l.responseText;t=r.split(&quot;\n\n&quot;);for(var a=0;a&lt;t.length;a++)e=t[a],ft.captions[a]=[],ft.captions[a]=e.split(&quot;\n&quot;);ft.captions.shift(),n(&quot;Successfully loaded the caption file via AJAX.&quot;)}else n(&quot;There was a problem loading the caption file via AJAX.&quot;,!0)},l.open(&quot;get&quot;,t,!0),l.send()}if(&quot;Safari&quot;===ft.browser.name&amp;&amp;ft.browser.version&gt;=7){n(&quot;Safari 7+ detected; removing track from DOM.&quot;),s=ft.media.getElementsByTagName(&quot;track&quot;);for(var c=0;c&lt;s.length;c++)ft.media.removeChild(s[c])}}else f(ft.container,C.classes.captions.enabled)}}function j(){if(&quot;audio&quot;!=ft.type&amp;&amp;C.fullscreen.enabled){var e=F.supportsFullScreen;e||C.fullscreen.fallback&amp;&amp;!I()?(n((e?&quot;Native&quot;:&quot;Fallback&quot;)+&quot; fullscreen enabled.&quot;),f(ft.container,C.classes.fullscreen.enabled,!0)):n(&quot;Fullscreen not supported and fallback disabled.&quot;),g(ft.buttons.fullscreen,!1),C.fullscreen.hideControls&amp;&amp;f(ft.container,C.classes.fullscreen.hideControls,!0)}}function D(){ft.media.play()}function _(){ft.media.pause()}function W(e){e===!0?D():e===!1?_():ft.media[ft.media.paused?&quot;play&quot;:&quot;pause&quot;]()}function Y(e){&quot;number&quot;!=typeof e&amp;&amp;(e=C.seekTime),U(ft.media.currentTime-e)}function z(e){&quot;number&quot;!=typeof e&amp;&amp;(e=C.seekTime),U(ft.media.currentTime+e)}function U(e){var t=0,r=ft.media.paused;&quot;number&quot;==typeof e?t=e:&quot;object&quot;!=typeof e||&quot;input&quot;!==e.type&amp;&amp;&quot;change&quot;!==e.type||(t=e.target.value/e.target.max*ft.media.duration),0&gt;t?t=0:t&gt;ft.media.duration&amp;&amp;(t=ft.media.duration);try{ft.media.currentTime=t.toFixed(1)}catch(a){}&quot;youtube&quot;==ft.type&amp;&amp;(ft.embed.seekTo(t),r&amp;&amp;_(),v(ft.media,&quot;timeupdate&quot;)),n(&quot;Seeking to &quot;+ft.media.currentTime+&quot; seconds&quot;),w(t)}function X(){f(ft.container,C.classes.playing,!ft.media.paused),f(ft.container,C.classes.stopped,ft.media.paused)}function J(e){function t(){f(ft.container,C.classes.hover,!0),window.clearTimeout(a),s||(a=window.setTimeout(function(){f(ft.container,C.classes.hover,!1)},2e3))}function n(e){s=&quot;mouseenter&quot;===e.type}var r=F.supportsFullScreen;e&amp;&amp;e.type===F.fullScreenEventName?ft.isFullscreen=F.isFullScreen(ft.container):r?(F.isFullScreen(ft.container)?F.cancelFullScreen():F.requestFullScreen(ft.container),ft.isFullscreen=F.isFullScreen(ft.container)):(ft.isFullscreen=!ft.isFullscreen,ft.isFullscreen?(y(document,&quot;keyup&quot;,$),document.body.style.overflow=&quot;hidden&quot;):(b(document,&quot;keyup&quot;,$),document.body.style.overflow=&quot;&quot;)),f(ft.container,C.classes.fullscreen.active,ft.isFullscreen),g(ft.buttons.fullscreen,ft.isFullscreen);var a,s=!1;C.fullscreen.hideControls&amp;&amp;(f(ft.controls,C.classes.hover,!1),m(ft.controls,&quot;mouseenter mouseleave&quot;,n,ft.isFullscreen),m(ft.container,&quot;mousemove&quot;,t,ft.isFullscreen))}function $(e){27===(e.which||e.charCode||e.keyCode)&amp;&amp;ft.isFullscreen&amp;&amp;J()}function G(e){&quot;undefined&quot;==typeof e&amp;&amp;(e=C.storage.enabled&amp;&amp;x().supported?window.localStorage[C.storage.key]||C.volume:C.volume),e&gt;10&amp;&amp;(e=10),0&gt;e&amp;&amp;(e=0),ft.media.volume=parseFloat(e/10),&quot;youtube&quot;==ft.type&amp;&amp;(ft.embed.setVolume(100*ft.media.volume),v(ft.media,&quot;volumechange&quot;)),ft.media.muted&amp;&amp;e&gt;0&amp;&amp;K()}function K(e){&quot;boolean&quot;!=typeof e&amp;&amp;(e=!ft.media.muted),g(ft.buttons.mute,e),ft.media.muted=e,&quot;youtube&quot;===ft.type&amp;&amp;(ft.embed[ft.media.muted?&quot;mute&quot;:&quot;unMute&quot;](),v(ft.media,&quot;volumechange&quot;))}function Q(){var e=ft.media.muted?0:10*ft.media.volume;ft.supported.full&amp;&amp;ft.volume&amp;&amp;(ft.volume.value=e),C.storage.enabled&amp;&amp;x().supported&amp;&amp;window.localStorage.setItem(C.storage.key,e),f(ft.container,C.classes.muted,0===e),ft.supported.full&amp;&amp;ft.buttons.mute&amp;&amp;g(ft.buttons.mute,0===e)}function Z(e){ft.supported.full&amp;&amp;ft.buttons.captions&amp;&amp;(&quot;boolean&quot;!=typeof e&amp;&amp;(e=-1===ft.container.className.indexOf(C.classes.captions.active)),g(ft.buttons.captions,e),f(ft.container,C.classes.captions.active,e))}function et(e){var t=&quot;waiting&quot;===e.type;clearTimeout(ft.loadingTimer),ft.loadingTimer=setTimeout(function(){f(ft.container,C.classes.loading,t)},t?250:0)}function tt(e){var t=ft.progress.played.bar,n=ft.progress.played.text,r=0;if(e)switch(e.type){case&quot;timeupdate&quot;:case&quot;seeking&quot;:r=h(ft.media.currentTime,ft.media.duration),&quot;timeupdate&quot;==e.type&amp;&amp;ft.buttons.seek&amp;&amp;(ft.buttons.seek.value=r);break;case&quot;change&quot;:case&quot;input&quot;:r=e.target.value;break;case&quot;playing&quot;:case&quot;progress&quot;:t=ft.progress.buffer.bar,n=ft.progress.buffer.text,r=function(){var e=ft.media.buffered;return e&amp;&amp;e.length?h(e.end(0),ft.media.duration):&quot;number&quot;==typeof e?100*e:0}()}t&amp;&amp;(t.value=r),n&amp;&amp;(n.innerHTML=r)}function nt(e,t){if(t){ft.secs=parseInt(e%60),ft.mins=parseInt(e/60%60),ft.hours=parseInt(e/60/60%60);var n=parseInt(ft.media.duration/60/60%60)&gt;0;ft.secs=(&quot;0&quot;+ft.secs).slice(-2),ft.mins=(&quot;0&quot;+ft.mins).slice(-2),t.innerHTML=(n?ft.hours+&quot;:&quot;:&quot;&quot;)+ft.mins+&quot;:&quot;+ft.secs}}function rt(){var e=ft.media.duration||0;!ft.duration&amp;&amp;C.displayDuration&amp;&amp;ft.media.paused&amp;&amp;nt(e,ft.currentTime),ft.duration&amp;&amp;nt(e,ft.duration)}function at(e){nt(ft.media.currentTime,ft.currentTime),tt(e)}function st(){for(var e=ft.media.querySelectorAll(&quot;source&quot;),t=e.length-1;t&gt;=0;t--)c(e[t]);ft.media.removeAttribute(&quot;src&quot;)}function ot(e){if(e.src){var t=document.createElement(&quot;source&quot;);d(t,e),p(ft.media,t)}}function it(e){if(&quot;youtube&quot;===ft.type&amp;&amp;&quot;string&quot;==typeof e)return ft.embed.destroy(),H(e),at(),void 0;if(_(),U(),st(),&quot;string&quot;==typeof e)ot({src:e});else if(e.constructor===Array)for(var t in e)ot(e[t]);ft.supported.full&amp;&amp;(at(),X()),ft.media.load(),null!==ft.media.getAttribute(&quot;autoplay&quot;)&amp;&amp;D()}function ut(e){&quot;video&quot;===ft.type&amp;&amp;ft.media.setAttribute(&quot;poster&quot;,e)}function lt(){function e(){var e=document.activeElement;e&amp;&amp;e!=document.body?document.querySelector&amp;&amp;(e=document.querySelector(&quot;:focus&quot;)):e=null;for(var t in ft.buttons){var n=ft.buttons[t];f(n,&quot;tab-focus&quot;,n===e)}}var t=&quot;IE&quot;==ft.browser.name?&quot;change&quot;:&quot;input&quot;;y(window,&quot;keyup&quot;,function(t){var n=t.keyCode?t.keyCode:t.which;9==n&amp;&amp;e()});for(var n in ft.buttons){var r=ft.buttons[n];y(r,&quot;blur&quot;,function(){f(r,&quot;tab-focus&quot;,!1)})}y(ft.buttons.play,&quot;click&quot;,function(){D(),setTimeout(function(){ft.buttons.pause.focus()},100)}),y(ft.buttons.pause,&quot;click&quot;,function(){_(),setTimeout(function(){ft.buttons.play.focus()},100)}),y(ft.buttons.restart,&quot;click&quot;,U),y(ft.buttons.rewind,&quot;click&quot;,Y),y(ft.buttons.forward,&quot;click&quot;,z),y(ft.buttons.seek,t,U),y(ft.volume,t,function(){G(this.value)}),y(ft.buttons.mute,&quot;click&quot;,K),y(ft.buttons.fullscreen,&quot;click&quot;,J),F.supportsFullScreen&amp;&amp;y(document,F.fullScreenEventName,J),y(ft.media,&quot;timeupdate seeking&quot;,at),y(ft.media,&quot;timeupdate&quot;,w),y(ft.media,&quot;loadedmetadata&quot;,rt),y(ft.buttons.captions,&quot;click&quot;,Z),y(ft.media,&quot;ended&quot;,function(){&quot;video&quot;===ft.type&amp;&amp;(ft.captionsContainer.innerHTML=&quot;&quot;),X()}),y(ft.media,&quot;progress playing&quot;,tt),y(ft.media,&quot;volumechange&quot;,Q),y(ft.media,&quot;play pause&quot;,X),y(ft.media,&quot;waiting canplay seeked&quot;,et),&quot;video&quot;===ft.type&amp;&amp;C.click&amp;&amp;y(ft.videoContainer,&quot;click&quot;,function(){ft.media.paused?v(ft.buttons.play,&quot;click&quot;):ft.media.ended?(U(),v(ft.buttons.play,&quot;click&quot;)):v(ft.buttons.pause,&quot;click&quot;)})}function ct(){if(!ft.init)return null;if(ft.container.setAttribute(&quot;class&quot;,C.selectors.container.replace(&quot;.&quot;,&quot;&quot;)),ft.init=!1,c(M(C.selectors.controls)),&quot;youtube&quot;===ft.type)return ft.embed.destroy(),void 0;&quot;video&quot;===ft.type&amp;&amp;(c(M(C.selectors.captions)),l(ft.videoContainer)),ft.media.setAttribute(&quot;controls&quot;,&quot;&quot;);var e=ft.media.cloneNode(!0);ft.media.parentNode.replaceChild(e,ft.media)}function pt(){if(ft.init)return null;F=k(),ft.browser=r(),ft.media=ft.container.querySelectorAll(&quot;audio, video, div&quot;)[0];var t=ft.media.tagName.toLowerCase();if(ft.type=&quot;div&quot;===t?ft.media.getAttribute(&quot;data-type&quot;):t,ft.supported=e.supported(ft.type),!ft.supported.basic)return!1;if(n(ft.browser.name+&quot; &quot;+ft.browser.version),V(),&quot;video&quot;==ft.type||&quot;audio&quot;==ft.type){if(!ft.supported.full)return ft.init=!0,void 0;dt(),C.displayDuration&amp;&amp;rt(),q()}ft.init=!0}function dt(){return L(),O()?(B(),G(),Q(),j(),lt(),void 0):!1}var ft=this;return ft.container=o,pt(),ft.init?{media:ft.media,play:D,pause:_,restart:U,rewind:Y,forward:z,seek:U,source:it,poster:ut,setVolume:G,togglePlay:W,toggleMute:K,toggleCaptions:Z,toggleFullscreen:J,isFullscreen:function(){return ft.isFullscreen||!1},support:function(e){return a(ft,e)},destroy:ct,restore:pt}:{}}var F,C,S={youtube:[]},E={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,iconPrefix:&quot;icon&quot;,selectors:{container:&quot;.player&quot;,controls:&quot;.player-controls&quot;,labels:&quot;[data-player] .sr-only, label .sr-only&quot;,buttons:{seek:&#39;[data-player=&quot;seek&quot;]&#39;,play:&#39;[data-player=&quot;play&quot;]&#39;,pause:&#39;[data-player=&quot;pause&quot;]&#39;,restart:&#39;[data-player=&quot;restart&quot;]&#39;,rewind:&#39;[data-player=&quot;rewind&quot;]&#39;,forward:&#39;[data-player=&quot;fast-forward&quot;]&#39;,mute:&#39;[data-player=&quot;mute&quot;]&#39;,volume:&#39;[data-player=&quot;volume&quot;]&#39;,captions:&#39;[data-player=&quot;captions&quot;]&#39;,fullscreen:&#39;[data-player=&quot;fullscreen&quot;]&#39;},progress:{container:&quot;.player-progress&quot;,buffer:&quot;.player-progress-buffer&quot;,played:&quot;.player-progress-played&quot;},captions:&quot;.player-captions&quot;,currentTime:&quot;.player-current-time&quot;,duration:&quot;.player-duration&quot;},classes:{videoWrapper:&quot;player-video-wrapper&quot;,embedWrapper:&quot;player-video-embed&quot;,type:&quot;player-{0}&quot;,stopped:&quot;stopped&quot;,playing:&quot;playing&quot;,muted:&quot;muted&quot;,loading:&quot;loading&quot;,tooltip:&quot;player-tooltip&quot;,hidden:&quot;sr-only&quot;,hover:&quot;player-hover&quot;,captions:{enabled:&quot;captions-enabled&quot;,active:&quot;captions-active&quot;},fullscreen:{enabled:&quot;fullscreen-enabled&quot;,active:&quot;fullscreen-active&quot;,hideControls:&quot;fullscreen-hide-controls&quot;}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0},storage:{enabled:!0,key:&quot;plyr_volume&quot;},controls:[&quot;restart&quot;,&quot;rewind&quot;,&quot;play&quot;,&quot;fast-forward&quot;,&quot;current-time&quot;,&quot;duration&quot;,&quot;mute&quot;,&quot;volume&quot;,&quot;captions&quot;,&quot;fullscreen&quot;],i18n:{restart:&quot;Restart&quot;,rewind:&quot;Rewind {seektime} secs&quot;,play:&quot;Play&quot;,pause:&quot;Pause&quot;,forward:&quot;Forward {seektime} secs&quot;,played:&quot;played&quot;,buffered:&quot;buffered&quot;,currentTime:&quot;Current time&quot;,duration:&quot;Duration&quot;,volume:&quot;Volume&quot;,toggleMute:&quot;Toggle Mute&quot;,toggleCaptions:&quot;Toggle Captions&quot;,toggleFullscreen:&quot;Toggle Fullscreen&quot;}};e.supported=function(e){var t,n,a=r(),s=&quot;IE&quot;===a.name&amp;&amp;a.version&lt;=9,o=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement(&quot;audio&quot;).canPlayType,u=!!document.createElement(&quot;video&quot;).canPlayType;switch(e){case&quot;video&quot;:t=u,n=t&amp;&amp;!s&amp;&amp;!o;break;case&quot;audio&quot;:t=i,n=t&amp;&amp;!s;break;case&quot;youtube&quot;:t=!0,n=!s&amp;&amp;!o;break;default:t=i&amp;&amp;u,n=t&amp;&amp;!s}return{basic:t,full:n}},e.setup=function(t){if(C=w(E,t),!C.enabled||!e.supported().basic)return!1;for(var n=document.querySelectorAll(C.selectors.container),r=[],a=n.length-1;a&gt;=0;a--){var s=n[a];if(&quot;undefined&quot;==typeof s.plyr){var o=new T(s);s.plyr=Object.keys(o).length?o:!1,&quot;function&quot;==typeof C.onSetup&amp;&amp;C.onSetup.apply(s.plyr)}r.push(s.plyr)}return r}}(this.plyr=this.plyr||{});</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>
  </div>


    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.08514s from github-fe142-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-+Ec97OckLaaiDVIxNjSIGzl1xSzrqh5sOBV8DyYYVpE=" src="https://assets-cdn.github.com/assets/frameworks-f8473dece7242da6a20d52313634881b3975c52cebaa1e6c38157c0f26185691.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-QjVJ5oiCgt91pMrcArnskwpUR/SSg5AwnIrY9afMGew=" src="https://assets-cdn.github.com/assets/github-423549e6888282df75a4cadc02b9ec930a5447f4928390309c8ad8f5a7cc19ec.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

