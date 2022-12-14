$(document).ready(function(){

// URL Comparisons for active link highlighting
	function parseURL(url) {
	    var a =  document.createElement('a');
	    a.href = url;
	    return {
	        source: url,
	        protocol: a.protocol.replace(':',''),
	        host: a.hostname,
	        port: a.port,
	        query: a.search,
	        params: (function(){
	            var ret = {},
	                seg = a.search.replace(/^\?/,'').split('&'),
	                len = seg.length, i = 0, s;
	            for (;i<len;i++) {
	                if (!seg[i]) { continue; }
	                s = seg[i].split('=');
	                ret[s[0]] = s[1];
	            }
	            return ret;
	        })(),
	        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
	        hash: a.hash.replace('#',''),
	        path: a.pathname.replace(/^([^\/])/,'/$1'),
	        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
	        segments: a.pathname.replace(/^\//,'').split('/')
	    };
	}

// turns current URL into a query-able object
	var currentPage = parseURL(window.location);  
// when hitting the root document there is not a [name].html - this highlights the first tab in that case
	if (currentPage.file == "") {  
		$('.home-page').addClass("current");
	}

// cycle through navigation links and highlight the current one if current URL and link are a match
	$('.global-navigation a').each(function(){
			var navItem = parseURL(this.href);
			if (currentPage.file == navItem.file) {
				$(this).addClass("current");
			}
		});


});