define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Btn1 **/
    AS_Button_b2b851cd41784d61b0bdd530f0b1189e: function AS_Button_b2b851cd41784d61b0bdd530f0b1189e(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl1.skin = "FooterNameSkinHighlight";
            }, null);
        } else {
            (function() {
                self.view.Lbl1.skin = "FooterNameSkinHighlight";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl2.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl2.skin = "FooterNameSkinNormal";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl3.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl3.skin = "FooterNameSkinNormal";
            })();
        }
        self.view.Img1.src = "photos_active.png";
        self.view.Img2.src = "shared_inactive.png";
        self.view.Img3.src = "album_inactive.png";
    },
    /** onClick defined for Btn2 **/
    AS_Button_jdeea129bc784978863de6d268937b2d: function AS_Button_jdeea129bc784978863de6d268937b2d(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl1.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl1.skin = "FooterNameSkinNormal";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl2.skin = "FooterNameSkinHighlight";
            }, null);
        } else {
            (function() {
                self.view.Lbl2.skin = "FooterNameSkinHighlight";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl3.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl3.skin = "FooterNameSkinNormal";
            })();
        }
        self.view.Img1.src = "photos_inactive.png";
        self.view.Img2.src = "shared_active.png";
        self.view.Img3.src = "album_inactive.png";
    },
    /** onClick defined for Btn3 **/
    AS_Button_jbf7f091e01c4ed28d8a4bf4c390aad6: function AS_Button_jbf7f091e01c4ed28d8a4bf4c390aad6(eventobject) {
        var self = this;
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl1.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl1.skin = "FooterNameSkinNormal";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl2.skin = "FooterNameSkinNormal";
            }, null);
        } else {
            (function() {
                self.view.Lbl2.skin = "FooterNameSkinNormal";
            })();
        }
        if (kony.theme.getCurrentTheme() != "default") {
            kony.theme.setCurrentTheme("default", function() {
                self.view.Lbl3.skin = "FooterNameSkinHighlight";
            }, null);
        } else {
            (function() {
                self.view.Lbl3.skin = "FooterNameSkinHighlight";
            })();
        }
        self.view.Img1.src = "photos_inactive.png";
        self.view.Img2.src = "shared_inactive.png";
        self.view.Img3.src = "album_active.png";
    }
});