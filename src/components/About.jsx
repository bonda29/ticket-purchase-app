import React, {useEffect} from 'react';


export default function About() {

    let executed = false

    useEffect(() => {

        if(!executed){
            const script1 = document.createElement('script');
            script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
            script1.async = true;
            document.body.appendChild(script1);
            const script = document.createElement("script");
            script.src = "/nicepage.js";
            script.async = true;
            document.body.appendChild(script);
            const jqueryscript = document.createElement("script");
            jqueryscript.src = "/jquery.js";
            jqueryscript.async = true;
            document.body.appendChild(jqueryscript);





        }
        executed = true;


    }, []);

    return (
        <div dangerouslySetInnerHTML={{__html: "<!DOCTYPE html>\n" +
                "<html style=\"font-size: 16px;\" lang=\"en\"><head>\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <meta charset=\"utf-8\">\n" +
                "    <meta name=\"keywords\" content=\"​Ние сме ученици от НПМГ, които имат за цел да помогнат на децата в нужда. Цялата реализация на събитието е осъществена благодарение на ученците., ​We create living, breathing structures that inspire and serve., ​We believe in collaboration and innovation, ​We solve complex problems\">\n" +
                "    <meta name=\"description\" content=\"\">\n" +
                "    <title>За нас</title>\n" +
                "    <link rel=\"stylesheet\" href=\"/nicepage.css\" media=\"screen\">\n" +
                "<link rel=\"stylesheet\" href=\"/За-нас.css\" media=\"screen\">\n" +
                //"    <script class=\"u-script\" type=\"text/javascript\" src=\"/jquery.js\" defer=\"\"></script>\n" +
                // "    <script class=\"u-script\" type=\"text/javascript\" src=\"/nicepage.js\" defer=\"\"></script>\n" +
                "    <meta name=\"generator\" content=\"Nicepage 6.10.5, nicepage.com\">\n" +
                "    <link id=\"u-theme-google-font\" rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i\">\n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    \n" +
                "    <script type=\"application/ld+json\">{\n" +
                "\t\t\"@context\": \"http://schema.org\",\n" +
                "\t\t\"@type\": \"Organization\",\n" +
                "\t\t\"name\": \"\"\n" +
                "}</script>\n" +
                "    <meta name=\"theme-color\" content=\"#478ac9\">\n" +
                "    <meta property=\"og:title\" content=\"За нас\">\n" +
                "    <meta property=\"og:type\" content=\"website\">\n" +
                "  <meta data-intl-tel-input-cdn-path=\"intlTelInput/\"></head>\n" +
                "  <body data-home-page=\"За-нас.html\" data-home-page-title=\"За нас\" data-path-to-root=\"./\" data-include-products=\"false\" class=\"u-body u-xl-mode\" data-lang=\"en\">\n" +
                "    <section class=\"skrollable u-border-1 u-border-grey-75 u-clearfix u-container-align-center-xs u-parallax u-section-1\" id=\"carousel_11ef\">\n" +
                "      <div class=\"u-clearfix u-sheet u-sheet-1\">\n" +
                "        <h1 class=\"u-align-center u-text u-text-1\">За нас</h1>\n" +
                "        <div class=\"data-layout-selected u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1\">\n" +
                "          <div class=\"u-layout\">\n" +
                "            <div class=\"u-layout-row\">\n" +
                "              <div class=\"u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-28-lg u-size-28-md u-size-28-sm u-size-28-xs u-size-33-xl u-layout-cell-1\">\n" +
                "                <div class=\"u-container-layout u-container-layout-1\">\n" +
                "                  <h2 class=\"u-text u-text-default u-text-2\">Здравейте, ние сме ученици от НПМГ</h2>\n" +
                "                  <p class=\"u-text u-text-3\">Стремим се да направим положителна промяна в живота на деца в нужда. Всичко това е възможно благодарение на нашата енергия, мотивация и отдаденост. С гордост можем да заявим, че всеки аспект на събитието - от идеята до осъществяването й - е резултат от колективните усилия и креативност на нашите съученици. Ние вярваме, че заедно можем да постигнем много и да вдъхновим и други да се присъединят към нашата кауза.<br>\n" +
                "                  </p>\n" +
                "                  <ul class=\"u-custom-list u-text u-text-4\">\n" +
                "                    <li>\n" +
                "                      <div class=\"u-list-icon u-text-palette-1-base\">\n" +
                "                        <div xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xml:space=\"preserve\" class=\"u-svg-content\">►</div>\n" +
                "                      </div> Постановката: \"Пепеляшка\"\n" +
                "                    </li>\n" +
                "                    <li>\n" +
                "                      <div class=\"u-list-icon u-text-palette-1-base\">\n" +
                "                        <div xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" xml:space=\"preserve\" class=\"u-svg-content\">►</div>\n" +
                "                      </div>Благотворителност: подпомагане на деца с ​онкохематологични заболявания\n" +
                "                    </li>\n" +
                "                  </ul>\n" +
                "                  <a href=\"https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=N2wwY3R0YjJkNHF0cWNoNm4zZzFzYjczZmMgYm9uZGFibGVnbG9iZTEwQG0&amp;tmsrc=bondableglobe10%40gmail.com\" class=\"u-active-none u-align-center u-btn u-button-style u-hover-none u-none u-text-hover-palette-1-base u-btn-1\" target=\"_blank\"><span class=\"u-file-icon u-icon\"><img src=\"https://spbucket.fra1.cdn.digitaloceanspaces.com/jun17Icon.png\" alt=\"\"></span>&nbsp; 17/06/2024г. 19:00\n" +
                "                  </a>\n" +
                "                  <a href=\"https://maps.app.goo.gl/4SCMRQkDdAeCo7L48\" class=\"u-active-none u-align-center u-btn u-button-style u-hover-none u-none u-text-hover-palette-1-base u-btn-2\" target=\"_blank\"><span class=\"u-file-icon u-icon\"><img src=\"https://spbucket.fra1.cdn.digitaloceanspaces.com/locationIcon.png\" alt=\"\"></span>&nbsp; Театър \"Освобождение\"\n" +
                "                  </a>\n" +
                "                </div>\n" +
                "              </div>\n" +
                "              <div class=\"u-container-style u-image u-layout-cell u-size-27-xl u-size-32-lg u-size-32-md u-size-32-sm u-size-32-xs u-image-1\" data-image-width=\"1080\" data-image-height=\"1080\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">\n" +
                "                <div class=\"u-container-layout u-valign-middle u-container-layout-2\"></div>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </section>\n" +

                "    <section class=\"u-align-center u-clearfix u-container-align-center-xs u-custom-color-1 u-section-3\" id=\"carousel_d321\">\n" +
                "      <div class=\"u-clearfix u-sheet u-sheet-1\">\n" +
                "        <h1 class=\"u-align-center u-text u-text-1\">Център \"Златна панделка\"</h1>\n" +
                "      </div>\n" +
                "    </section>\n" +
                "    <section class=\"u-clearfix u-container-align-center-lg u-container-align-center-xs u-section-4\" id=\"carousel_4d53\">\n" +
                "      <div class=\"u-clearfix u-sheet u-sheet-1\">\n" +
                "        <h2 class=\"u-align-center u-text u-text-default-xl u-text-1\">Участници в пиесата</h2>\n" +
                "        <div class=\"u-expanded-width u-list u-list-1\">\n" +
                "          <div class=\"u-repeater u-repeater-1\">\n" +
                "            <div class=\"u-border-2 u-border-grey-15 u-border-no-bottom u-border-no-left u-border-no-right u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item\">\n" +
                "              <div class=\"u-container-layout u-similar-container u-container-layout-1\">\n" +
                "                <h5 class=\"u-align-center-sm u-align-center-xs u-text u-text-2\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">Актьори</h5>\n" +
                "                <ul class=\"u-align-left u-text u-text-3\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"1000\" data-animation-delay=\"0\">\n" +
                "                  <li> Валерия Топалова</li>\n" +
                "                  <li>Вера Ергина</li>\n" +
                "                  <li>Виктория Василева</li>\n" +
                "                  <li>Владислав Илиев</li>\n" +
                "                  <li>Крум Кадрев</li>\n" +
                "                  <li>Лора Серафимова</li>\n" +
                "                  <li>Мила Бончева</li>\n" +
                "                  <li>Патрик Хесън</li>\n" +
                "                  <li>Ронислава Николова</li>\n" +
                "                  <li>Симона Лазарова</li>\n" +
                "                  <li>Стефан Енев</li>\n" +
                "                  <li>Татяна Хаджииванова</li>\n" +
                "                  <li>Цветелина Радева</li>\n" +
                "                  <li>Яница Тончева</li>\n" +
                "                </ul>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "            <div class=\"u-border-2 u-border-grey-15 u-border-no-bottom u-border-no-left u-border-no-right u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item\">\n" +
                "              <div class=\"u-container-layout u-similar-container u-container-layout-2\">\n" +
                "                <h5 class=\"u-align-center-sm u-align-center-xs u-text u-text-4\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\"> Kостюмографи</h5>\n" +
                "                <ul class=\"u-align-left u-text u-text-5\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"1000\">\n" +
                "                  <li>Анна Костадинова</li>\n" +
                "                  <li>Деница Христова</li>\n" +
                "                  <li>Жана Стоянова</li>\n" +
                "                  <li>Стилиан Неделчев<br>\n" +
                "                  </li>\n" +
                "                </ul>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "            <div class=\"u-border-2 u-border-grey-15 u-border-no-bottom u-border-no-left u-border-no-right u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item\">\n" +
                "              <div class=\"u-container-layout u-similar-container u-container-layout-3\">\n" +
                "                <h5 class=\"u-align-center-sm u-align-center-xs u-text u-text-6\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">Режисьор </h5>\n" +
                "                <ul class=\"u-align-left u-text u-text-7\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"1000\">\n" +
                "                  <li>Владимир Стойчев</li>\n" +
                "                </ul>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "            <div class=\"u-border-2 u-border-grey-15 u-border-no-bottom u-border-no-left u-border-no-right u-container-align-center-sm u-container-align-center-xs u-container-style u-list-item u-repeater-item\">\n" +
                "              <div class=\"u-container-layout u-similar-container u-container-layout-4\">\n" +
                "                <h5 class=\"u-align-center-sm u-align-center-xs u-text u-text-8\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">Софтуер</h5>\n" +
                "                <ul class=\"u-align-left u-text u-text-9\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"1000\">\n" +
                "                  <li>Васил Велинов</li>\n" +
                "                  <li>Даниел Йорданов</li>\n" +
                "                  <li>Николай Бойчев</li>\n" +
                "                </ul>\n" +
                "              </div>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "    </section>\n" +
                "    <section class=\"u-align-center u-clearfix u-container-align-center u-custom-color-1 u-section-5\" id=\"carousel_ebad\">\n" +
                "      <div class=\"u-clearfix u-sheet u-valign-middle u-sheet-1\">\n" +
                "        <h2 class=\"u-align-center u-text u-text-default u-text-1\">Купи си билет</h2>\n" +
                "        <a href=\"https://pepeliyashka.com/purchase\" class=\"u-active-palette-1-light-2 u-align-center u-border-none u-btn u-button-style u-hover-palette-1-light-2 u-text-active-white u-text-hover-white u-white u-btn-1\">БИЛЕТ </a>\n" +
                "      </div>\n" +
                "    </section>\n" +
                "    <section class=\"u-align-center u-clearfix u-container-align-center-lg u-container-align-center-xl u-container-align-center-xs u-section-6\" id=\"carousel_2b5b\">\n" +
                "      <img class=\"u-expanded-width u-hidden-xs u-image u-image-default u-image-1\" src=\"https://spbucket.fra1.cdn.digitaloceanspaces.com/SUBCINDERELLA-superJumbo.webp\" alt=\"\" data-image-width=\"2048\" data-image-height=\"1276\">\n" +
                "      <div class=\"u-list u-list-1\">\n" +
                "        <div class=\"u-repeater u-repeater-1\">\n" +
                "          <div class=\"u-container-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-1\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">\n" +
                "            <div class=\"u-container-layout u-similar-container u-container-layout-1\">\n" +
                "              <h5 class=\"u-align-center u-custom-item u-text u-text-1\" data-animation-name=\"\" data-animation-duration=\"0\" data-animation-delay=\"0\" data-animation-direction=\"\">backend​, hosting</h5>\n" +
                "              <p class=\"u-align-center u-custom-item u-text u-text-2\">\n" +
                "                <br>Николай Бойчев<br>\n" +
                "                <br>\n" +
                "              </p>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "          <div class=\"u-container-align-center u-container-style u-list-item u-repeater-item u-shape-rectangle u-white u-list-item-2\" data-animation-name=\"customAnimationIn\" data-animation-duration=\"2000\">\n" +
                "            <div class=\"u-container-layout u-similar-container u-container-layout-2\">\n" +
                "              <h5 class=\"u-align-center u-custom-item u-text u-text-3\" data-animation-name=\"\" data-animation-duration=\"0\" data-animation-delay=\"0\" data-animation-direction=\"\">Frontend </h5>\n" +
                "              <p class=\"u-align-center u-custom-item u-text u-text-4\">Васил Велинов<br>Даниел Йорданов <br>Николай Бойчев\n" +
                "              </p>\n" +
                "            </div>\n" +
                "          </div>\n" +
                "        </div>\n" +
                "      </div>\n" +
                "      <p class=\"u-align-center u-text u-text-5\">\"​Който иска да помогне, даже и с вързани ръце ще направи много добро.\"<br>&nbsp;~ Фьодор Достоевски<br>\n" +
                "      </p>\n" +
                "    </section>\n" +
                "</body></html>"}} style={{ width: '100%', border: 'none' }}></div>
    );
}

/*
Име на постановката: "Пепеляшка"
Име на фондацията: "Деца с онкохематологични заболявания", център "Златна панделка"

Участници в пиесата: 

Владислав Илиев
Ронислава Николова
Татяна Хаджииванова
Цветелина Радева
Лора Серафимова
Мила Бончева
Валерия Топалова
Стефан Енев 
Патрик Хесън
Крум Кадрев
Яница Тончева
Вера Ергина
Симона Лазарова

костюмографи:
Стилиан Неделчев
Анна Костадинова
Деница Христова
Жана Стоянова

режисьор:
Владимир Стойчев

ден и час: 17.06.2024г. 19:00
*/