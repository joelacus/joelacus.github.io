exampleMenuItemSource = function (selector) {
    if ($(selector).attr('id') == 'PNG_JPG') {
        return [
                {
                    header: 'Example Dynamic'
                },
                {
                    text: 'PNG',
                    action: function(e, selector) { alert('PNG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                },
                {
                    text: 'JPG',
                    action: function(e, selector) { alert('JPG clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                },
                {   divider: true   },
                {
                    icon: 'glyphicon-list-alt',
                    text: 'Dynamic nested',
                    subMenu : [
                    {
                        text: 'More dynamic',
                        action: function(e, selector) { alert('More dynamic clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                    },
                    {
                        text: 'And more...',
                        action: function(e, selector) { alert('And more... clicked on ' + selector.prop("tagName") + ":" + selector.attr("id")); }
                    }
                    ]
                }
            ]
    } else {
        return [
                {
                    icon: 'glyphicon-exclamation-sign',
                    text: 'No image types supported!'
                }
            ]
    }
}

right_click_menu = {
    id: 'rightClickMenu',
    data: [
        /*{
            header: 'Widgets'
        },*/
        {   
            text: 'Add Widget',
            subMenu : [
            {
                icon: 'fa-bookmark',
                text: 'Bookmark',
                action: function(e, selector) { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-bookmark").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-bookmark").click();
                                                }
                                        }
            },
            {
                icon: 'fa-sticky-note',
                text: 'Notepad',
                action: function(e, selector)   { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-notepad").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-notepad").click();
                                                }
                                        }
            },
            {
                icon: 'fa-search',
                text: 'DuckDuckGo',
                action: function(e, selector) { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-search-d").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-search-d").click();
                                                }
                                        }
            },
            {
                icon: 'fa-search',
                text: 'Google',
                action: function(e, selector) { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-search-g").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-search-g").click();
                                                }
                                        }
            },
            {
                icon: 'fa-images',
                text: 'Photo',
                action: function(e, selector) { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-photo").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-photo").click();
                                                }
                                        }
            },
            {
                icon: 'fa-square',
                text: 'Blank',
                action: function(e, selector) { if($("#btn-edit-save.alt" + name).length == 0) {
                                                    $(".btn-edit-save").click();$("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-blank").click();
                                                } else {
                                                    $("#dropdown-rightClickMenu").css("display", "none");$(".btn-add-blank").click();
                                                }
                                        }
            },
            ]
        },        
        /*{
            header: 'Appearance'
        },*/
        {
            icon: 'fa-image',
            text: 'Appearance',
            action: function(e, selector)   { if($("#btn-edit-save.alt" + name).length == 0) {
                                               $("#dropdown-rightClickMenu").css("display", "none"); $(".btn-edit-save").click();$(".btn-background-dialogue").click();
                                            } else {
                                                $("#dropdown-rightClickMenu").css("display", "none");$(".btn-background-dialogue").click(); 
                                            }
                                        }
        },
        {
            divider: true
        },
        /*{
            header: 'Other'
        },*/        
        {
            icon: 'fa-file-export',
            text: 'Export Save',
            action: function(e, selector) { $(".btn-export-save").click();$("#dropdown-rightClickMenu").css("display", "none"); }
        },
        {
            icon: 'fa-file-upload',
            text: 'Import Save',
            action: function(e, selector) { $(".btn-import-save").click();$("#dropdown-rightClickMenu").css("display", "none"); }
        },
        {
            icon: 'fa-undo-alt',
            text: 'Reset To Default',
            action: function(e, selector) { $(".btn-default-layout").click();$("#dropdown-rightClickMenu").css("display", "none"); }
        },
    ]
};