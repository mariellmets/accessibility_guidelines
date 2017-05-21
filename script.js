$(document).ready(function() {
    //Kõigepealt loome andmed
    for (i = 0; i < contentData.length; i++) {

        //Kõigepealt loo element, mis läheb ümber akordioni
        var block = $("<li class='a11yAccordionItem'></li>");

        //Nüüd loo elemendid, mis pannakse filtreeritavate plokkide sisse
		//Elemendid on deklareeritud jQuery objektidena, et saaks neile enne lehele lisamist HTML-i appendida
        var title = $("<div class='a11yAccordionItemHeader'><h2>" + contentData[i].title + "</h2></div>")
        var blockContent = $("<ol class='a11yAccordionHideArea'></ol>");

        //Siin loopitakse läbi iga ploki sektsioonide
        for (j = 0; j < contentData[i].sections.length; j++) {
			//Tee igast sectionist muutuja, et oleks veidi vähem kirjutamist allpool
            var sectionData = contentData[i].sections[j];
            var section = "<li class='section filterable " + sectionData.tags + "'>" + sectionData.content + "</li>";
			
			//Äsja loodud section pane blocki sisse
            blockContent.append(section);
        }

        //Pane lisatud ploki sisse sisu
        block.append(title);
        block.append(blockContent);

        //Pane plokk lehele
        $(".content").append(block);
    }


    //Tee contendist akordionid
    var accordion = new A11yAccordion({
		parentSelector: '#accordion',
        hiddenLinkDescription: 'row with data in the Forth Accordion',
        showOne: false,
        overallSearch: true,
        searchActionType: 'collapse',
		  labels: {
			showHeaderLabelText: 'Ava',
			hideHeaderLabelText: 'Sulge',
			searchPlaceholder: 'Sisesta otsingusõna ja vajuta Enter',
			noResultsText: 'Tulemusi ei leitud',
			titleText: 'Sisesta otsingusõna',
			resultsMessage: 'Tulemusi: '
		  }
	  });


    //Paneks filtrid tööle
    $(".filter").change(function() {
        $(".filterable").hide();
        var unChecked = $(".filter:not(:checked)");
        var exclusionList = [];
        if (unChecked.length) {
            unChecked.each(function() {
                exclusionList.push("." + this.value);
            });
            exclusionList = exclusionList.join(',');
            $(".filterable").not(exclusionList).show();
        } else {
            $(".filterable").show();
        }
    });
	
	// Akrutega kerimine
    var offset = -120;
    var scrollTime = 300;

    $('.content-list li a').click(function() {
        $("html, body").animate({
            scrollTop: $( $(this).attr("href") ).offset().top + offset 
        }, scrollTime);
		var sHref = this.href.split("-");
		accordion.uncollapseRow( sHref[sHref.length - 1] );
        return false;
    });
	
	
	//Sulgemisnupp
	
	$(".close-all").click(function() {
		$(".a11yAccordionHideArea").hide();
		$(".a11yAccordionHideArea").removeClass("visiblea11yAccordionItem");
		$(".a11yAccordionItemHeaderLinkShowLabel").show();
		$(".a11yAccordionItemHeaderLinkHideLabel").hide();
		$(".a11yAccordion-triangle").removeClass("toggle");
	});
});