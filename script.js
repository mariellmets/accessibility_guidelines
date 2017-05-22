$(document).ready(function() {
    //Kõigepealt loome andmed
    for (i = 0; i < contentData.length; i++) {

        //Kõigepealt loo element, mis läheb ümber akordioni
        var block = $("<li class='a11yAccordionItem'></li>");

        //Nüüd loo elemendid, mis pannakse filtreeritavate plokkide sisse
		//Elemendid on deklareeritud jQuery objektidena, et saaks neile enne lehele lisamist HTML-i appendida
        var title = $("<div class='a11yAccordionItemHeader'><h2>" + contentData[i].title + "</h2></div>")
        var blockContent = $("<ol class='a11yAccordionHideArea'></ol>");
		
		//HTML no-results jupi jaoks
        var noResults = $("<div class='no-results'>Filtritetele vastavat sisu ei leitud</div>");

        //Siin loopitakse läbi iga ploki sektsioonide
        for (j = 0; j < contentData[i].sections.length; j++) {
			//Tee igast sectionist muutuja, et oleks veidi vähem kirjutamist allpool
            var sectionData = contentData[i].sections[j];
            var section = "<li class='section filterable " + sectionData.tags + "'>" + sectionData.content + "</li>";
			
			//Äsja loodud section pane blocki sisse
            blockContent.append(section);
        }
		//Tee nii, et no-results oleks peale sectioneid
        blockContent.append(noResults);

        //Pane lisatud ploki sisse sisu
        block.append(title);
        block.append(blockContent);

        //Pane plokk lehele
        $(".content").append(block);
    }


    //Tee contendist akordionid
    var accordion = new A11yAccordion({
		parentSelector: '#accordion',
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
		$(".filterable").addClass('exclude');
        var unChecked = $(".filter:not(:checked)");
        var exclusionList = [];
        if (unChecked.length) {
            unChecked.each(function() {
                exclusionList.push("." + this.value);
            });
            exclusionList = exclusionList.join(',');
            $(".filterable").not(exclusionList).removeClass('exclude');
        } else {
            $(".filterable").removeClass('exclude');
        }
    });
	
	// Akrutega kerimine
    var offset = -120;
    var scrollTime = 300;

    $('.content-list li a').click(function() {
		console.log($("#a11yaccordion-row-" + $(this).data('target') ));
        $('html, body').animate({
            scrollTop: $("#a11yaccordion-row-" + $(this).data('target') ).offset().top + offset 
        }, scrollTime);
		accordion.uncollapseRow( $(this).data('target') );
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
