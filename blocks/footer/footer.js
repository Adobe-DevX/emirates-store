/* eslint-disable no-console */
import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  console.log(`footerMeta = ${footerMeta}`);
  console.log(`footerMeta footer = ${footerMeta.footer}`);
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer'; /* footerMeta.footer || '/footer'; */
  console.log(`footerPath = ${footerPath}`);
  //  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  footer.classList.add('wrapper');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // block.append(footer);
  //custom footer
  const footer_element = document.createElement('div');
  footer_element.classList.add('custom-footer');
  footer_element.innerHTML = `<div class="custom-footer-wrapper">
    <div class="container">
        <div class="row">



            <div class="span2">

                <!-- Categories -->
                <div class="categories">
                    <h6>Shop  </h6>

                    <ul class="links">

                                <li>

                                    <a href="/eos-store/aircraft-models/c-24/c-119" data-id="footer_internallink" data-link="Aircraft Models">
                                        Aircraft Models
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/accessories/c-24/c-73" data-id="footer_internallink" data-link="Accessories">
                                        Accessories
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/men/c-24/c-128" data-id="footer_internallink" data-link="Men">
                                        Men
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/women/c-24/c-129" data-id="footer_internallink" data-link="Women">
                                        Women
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/children/c-24/c-131" data-id="footer_internallink" data-link="Children">
                                        Children
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/nba/c-24/c-292" data-id="footer_internallink" data-link="NBA">
                                        NBA
                                    </a>

                                </li>
                                <li>

                                    <a href="/eos-store/sale/c-24/c-159" data-id="footer_internallink" data-link="Sale">
                                        Sale
                                    </a>

                                </li>
						<a href="/emirates-neo/">Emirates Neo</a>

                    </ul>
                </div>
                <!-- End class="categories" -->


            </div>

            <div class="span2">
                <!-- Support -->
                <div class="categories">
                    <h6>Orders</h6>

                    <ul class="links">
                        <li>
                            <a href="/storelocator" title="Store locator" data-id="footer_internallink" data-link="Store locator" class="title">Store locator</a>
                        </li>
                        <li>
                            <a href="/shipping-policy" title="Shipping Policy" data-id="footer_internallink" data-link="Shipping Policy" class="title">Shipping &amp; Returns</a>
                        </li>
                        <li>
                            <a href="/emirates-skywards" title="Emirates Skywards" class="title" data-id="footer_internallink" data-link="Emirates Skywards">Emirates Skywards</a>
                        </li>
                        <li>
                            <a href="/trackshipment" title="Track Shipment" data-id="footer_internallink" data-link="Track Shipment" class="title">Track Shipment</a>
                        </li>
						<li>
                            <a href="/import-duties-taxes-and-fees" title=" Import Duties, Taxes and Fees" data-id="footer_internallink" data-link="Import Duties, Taxes and Fees" class="title">Import Duties, Taxes and Fees</a>
                        </li>
                    </ul>
                </div>
                <!-- End class="support" -->



            </div>

            <div class="span2">
                <!-- Support -->
                <div class="support">
                    <h6>Info</h6>

                    <ul class="links">
                        <li>
                            <a href="/faq" title="FAQ" class="title" data-id="footer_internallink" data-link="FAQ">FAQ</a>
                        </li>
                        <li>
                            <a href="/aboutus" title="About us" class="title" data-id="footer_internallink" data-link="About us">About us</a>
                        </li>
                        <li>
                            <a href="/contact-us" title="Contact us" class="title" data-id="footer_internallink" data-link="Contact us">Contact us</a>
                        </li>
                        <li>
                            <a href="/condition_of_use" title="Conditions of use" data-id="footer_internallink" data-link="Conditions of use" class="title">Conditions of use</a>
                        </li>
                        <li>
                            <a href="/privacypolicy" title="Privacy Policy" data-id="footer_internallink" data-link="Privacy Policy" class="title">Privacy policy</a>
                        </li>
                        <li>
                            <a href="http://www.emirates.com/" title="Emirates.com" data-id="footer_externallink" data-link="Emirates.com" class="title">Emirates.com</a>
                        </li>
						<li>
                            <a href="/important-notice-authorised-licensees-and-distributors/" title="Official Licensee information" data-id="footer_externallink" data-link="Official Licensee information" class="title">Official Licensee information</a>
                        </li>
                    </ul>
                </div>
                <!-- End class="support" -->
            </div>


            <div class="span2">
            </div>

            <div class="span4">

                <!-- Newsletter subscription -->
                <div class="newsletter">
                    <h6>Sign up for our emails</h6>
                    <p>Receive our latest news and updates direct to your inbox</p>
                    <form enctype="multipart/form-data" id="newsletter">
                        <div id="recaptcha" class="g-recaptcha" data-sitekey="6Leyy14hAAAAACy1_yyVYPvwDUez5gL4phFrBe7k" data-callback="ValidateCaptchaAndSubscribeemail" data-size="invisible"><div class="grecaptcha-badge" data-style="none" style="width: 256px; height: 60px; position: fixed; visibility: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-mp0m0x4okl6p" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Leyy14hAAAAACy1_yyVYPvwDUez5gL4phFrBe7k&amp;co=aHR0cHM6Ly93d3cuZW1pcmF0ZXMuc3RvcmU6NDQz&amp;hl=en&amp;v=GUGrl5YkSwpBsxsF3eY665Ye&amp;size=invisible&amp;cb=mvhfa1mo2rhi"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div>
                        <div class="input-append" id="news">
                            <input type="text" class="span3" name="Email" id="newsletter_email" value="" placeholder="example@domain.com" maxlength="50">
                            
                            &nbsp; <button style="margin-left: 5px; text-transform: none !important;height: 32px;" class="btn btn-primary btn-small subscribe-News-letter" type="button" name="subscribeNewsletternew" id="subscribeNewsletternew">
                                Subscribe
                            </button>
                        </div>
                        <div id="EmailText">
                            <p class="google-term contact-us">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank"> Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</p>
                        </div>
                        <div id="newsletter_error_email" style="display: none;">
                            <label style="color: red;" id="newsletter_error_email_lbl">Please enter vaild email address</label>
                            <div id="newsletter_error_captcha_lbl">
                                <span>Sorry, there’s a problem with our system and we can’t sign you up to our newsletter at the moment</span>
                                <br>
                                <span>Please try again soon.</span>
                            </div>
                        </div>
                    </form>


                </div>
                <!-- End class="newsletter" -->
               <!-- Social icons -->
                <div class="social">
                    <h6>Visit us at</h6>

                    <ul>
                        <li>
                            <a class="fa social-x" target="_blank" href="http://www.twitter.com/emirates" title="X">
                                <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_36_165)">
                                        <path d="M6.85714 0C3.075 0 0 3.075 0 6.85714V41.1429C0 44.925 3.075 48 6.85714 48H41.1429C44.925 48 48 44.925 48 41.1429V6.85714C48 3.075 44.925 0 41.1429 0H6.85714ZM38.6893 9L27.5679 21.7071L40.65 39H30.4071L22.3929 28.5107L13.2107 39H8.12143L20.0143 25.4036L7.46786 9H17.9679L25.2214 18.5893L33.6 9H38.6893ZM34.6393 35.9571L16.4357 11.8821H13.4036L31.8107 35.9571H34.6286H34.6393Z" fill="#77787b"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_36_165">
                                            <rect width="48" height="48" fill="#77787b"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a class="fa social-instagram" target="_blank" href="https://www.instagram.com/emirates" title="Instagram">
                                <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_36_72" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                        <path d="M37.1374 14.5706C36.8145 13.7365 36.4042 13.1086 35.7686 12.4663C35.1337 11.8278 34.5038 11.4175 33.6694 11.1018C33.0593 10.8616 32.1443 10.5763 30.5074 10.5046C28.8416 10.4344 28.3481 10.4138 24.2512 10.4138C20.151 10.4138 19.6564 10.4333 17.9914 10.5046C16.3534 10.5756 15.4433 10.8657 14.8388 11.0992C13.9965 11.422 13.3661 11.8331 12.7313 12.4689C12.0983 13.1074 11.6876 13.7347 11.3681 14.5665C11.1274 15.1787 10.8431 16.089 10.7707 17.7327C10.6969 19.3888 10.6822 19.8858 10.6822 23.9893C10.6822 28.1048 10.6972 28.6029 10.7707 30.2549C10.8427 31.9035 11.1274 32.8183 11.3659 33.4189C11.6899 34.2578 12.0983 34.8896 12.7313 35.5254C13.3695 36.1669 13.9995 36.5757 14.8305 36.8933C15.4432 37.1358 16.3538 37.4203 17.9948 37.4942C19.6571 37.5648 20.1529 37.5802 24.2524 37.5802C28.3481 37.5802 28.8427 37.5659 30.5089 37.4942C32.145 37.4207 33.0596 37.1358 33.6641 36.8985C34.4992 36.5776 35.1266 36.1711 35.7698 35.5269C36.4069 34.8922 36.8134 34.2605 37.1378 33.4264C37.3759 32.8104 37.6556 31.8934 37.7325 30.2557V30.2538C37.8064 28.5943 37.8203 28.1022 37.8195 23.9912C37.8195 19.8978 37.8049 19.4031 37.731 17.7304C37.6553 16.1006 37.3747 15.1892 37.1374 14.5706ZM24.0011 32.2522C19.4449 32.2522 15.7519 28.5586 15.7519 23.9923C15.7519 19.4391 19.4449 15.744 24.0011 15.744C28.5551 15.744 32.2455 19.4391 32.2448 23.9923C32.2463 28.559 28.5548 32.2522 24.0011 32.2522ZM32.5736 17.3487C31.5086 17.3487 30.6458 16.4857 30.6458 15.4186C30.6458 14.3495 31.5086 13.4854 32.5736 13.4854C33.6371 13.4854 34.5 14.3503 34.5 15.4186C34.5 16.4853 33.6371 17.3487 32.5736 17.3487ZM24.0011 18.5412C20.9925 18.5412 18.549 20.9852 18.549 23.9919C18.549 27.011 20.9918 29.4531 24.0011 29.4531C27.009 29.4531 29.4506 27.011 29.4506 23.9919C29.4499 20.9852 27.0086 18.5412 24.0011 18.5412ZM43.5 0H4.5C2.01488 0 0 2.01684 0 4.5044V43.4956C0 45.9832 2.01488 48 4.5 48H43.5C45.9851 48 48 45.9832 48 43.4956V4.5044C48 2.01684 45.9851 0 43.5 0ZM39.9637 30.6239C39.8839 32.3397 39.612 33.5045 39.2153 34.5322C38.808 35.5889 38.253 36.486 37.3624 37.3726C36.4725 38.2664 35.5781 38.8193 34.5206 39.2299C33.4991 39.6278 32.3314 39.897 30.6191 39.9799C28.9088 40.0587 28.3616 40.0779 24.0019 40.0779C19.6365 40.0779 19.092 40.0606 17.3779 39.9799C15.669 39.897 14.5058 39.6278 13.4794 39.2299C12.4204 38.8193 11.5294 38.2667 10.6399 37.3726C9.74475 36.4845 9.192 35.5874 8.78325 34.5322C8.38875 33.5052 8.11575 32.3393 8.037 30.6239C7.95638 28.9081 7.941 28.3638 7.941 23.9923C7.941 19.6317 7.95563 19.0866 8.037 17.3708C8.11575 15.6592 8.38912 14.494 8.78325 13.4644C9.192 12.407 9.74475 11.514 10.6399 10.6263C11.529 9.72725 12.42 9.17584 13.4801 8.76669C14.5069 8.37218 15.6698 8.09666 17.3786 8.02196C19.0931 7.93675 19.6372 7.92174 24.0026 7.92174C28.3624 7.92174 28.9084 7.93675 30.6191 8.02196C32.3321 8.09703 33.4991 8.37218 34.5206 8.76669C35.5804 9.17584 36.4732 9.72688 37.3624 10.6263C38.253 11.5147 38.8076 12.4081 39.2153 13.4644C39.612 14.494 39.8839 15.6584 39.9637 17.3708C40.0451 19.0866 40.059 19.6317 40.059 23.9923C40.059 28.3638 40.0451 28.9077 39.9637 30.6239Z" fill="#77787b"></path>
                                    </mask>
                                    <g mask="url(#mask0_36_72)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-19.2012 -19.2188H67.1988V67.2657H-19.2012V-19.2188Z" fill="#77787b"></path>
                                    </g>
                                </svg>

                            </a>
                        </li>
                        <li>
                            <a class="fa social-facebook" target="_blank" href="http://www.facebook.com/Emirates" title="Facebook">
                                <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_38_113" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                        <path d="M43.5 0H4.5C2.01488 0 0 2.01684 0 4.5044V43.4956C0 45.9832 2.01488 48 4.5 48H4.6875V47.9294H25.5649V29.8375H19.3429V22.6474H25.5649V17.3453C25.5649 11.1912 29.3314 7.84103 34.8326 7.84103C37.4674 7.84103 39.7316 8.03697 40.392 8.12406V14.5552L36.5768 14.5567C33.585 14.5567 33.006 15.9756 33.006 18.057V22.6474H40.1408L39.2111 29.8371H33.006V47.9291H43.3125V48H43.5C45.9851 48 48 45.9832 48 43.4956V4.5044C48 2.01722 45.9851 0 43.5 0Z" fill="#77787b"></path>
                                    </mask>
                                    <g mask="url(#mask0_38_113)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-19.2012 -19.2188H67.1988V67.2657H-19.2012V-19.2188Z" fill="#77787b"></path>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a class="fa social-linkedin" target="_blank" href="https://www.linkedin.com/company/emirates" title="Linkedin">
                                <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_36_49" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                        <path d="M43.5 0H4.5C2.01488 0 0 2.01684 0 4.5044V43.4956C0 45.9832 2.01488 48 4.5 48H43.5C45.9851 48 48 45.9832 48 43.4956V4.5044C48 2.01722 45.9851 0 43.5 0ZM15.4324 39.3639H9.03862V18.7773H15.4324V39.3639ZM12.2355 15.964C10.1873 15.964 8.53125 14.3026 8.53125 12.255C8.53125 10.2058 10.1873 8.54334 12.2355 8.54334C14.2793 8.54334 15.9398 10.2058 15.9398 12.255C15.9394 14.3026 14.2793 15.964 12.2355 15.964ZM32.9858 39.3639V29.3522C32.9858 26.9645 32.9438 23.8936 29.6648 23.8936C26.3381 23.8936 25.8307 26.4968 25.8307 29.1802V39.3647H19.4411V18.7773H25.572V21.5918H25.6598C26.5133 19.9733 28.5979 18.2676 31.7081 18.2676C38.1806 18.2676 39.375 22.5295 39.375 28.0729L39.3754 39.3639H32.9858Z" fill="#77787b"></path>
                                    </mask>
                                    <g mask="url(#mask0_36_49)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-19.2012 -19.2188H67.1988V67.2657H-19.2012V-19.2188Z" fill="#77787b"></path>
                                    </g>
                                </svg>

                            </a>
                        </li>
                        
                        <li>
                            <a class="fa social-youtube" target="_blank" href="http://www.youtube.com/user/EMIRATES" title="Youtube">
                                <svg width="28" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_36_130)">
                                        <g clip-path="url(#clip1_36_130)">
                                            <mask id="mask0_36_130" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="48">
                                                <path d="M43.5 0H4.5C2.01488 0 0 2.01684 0 4.5044V43.4956C0 45.9832 2.01488 48 4.5 48H43.5C45.9851 48 48 45.9832 48 43.4956V4.5044C48 2.01722 45.9851 0 43.5 0ZM39.4864 25.195C39.4868 27.7043 39.1781 30.2121 39.1781 30.2121C39.1781 30.2121 38.8755 32.3483 37.947 33.289C36.7695 34.5243 35.4499 34.5311 34.8443 34.6028C30.5093 34.9158 24.0015 34.9256 24.0015 34.9256C24.0015 34.9256 15.9484 34.852 13.4704 34.6141C12.7811 34.4853 11.2335 34.5243 10.0553 33.289C9.12675 32.3491 8.82413 30.2121 8.82413 30.2121C8.82413 30.2121 8.51437 27.7039 8.51437 25.195V22.8429C8.51437 20.334 8.82413 17.825 8.82413 17.825C8.82413 17.825 9.12638 15.6888 10.0553 14.7482C11.2335 13.5132 12.5528 13.5068 13.1584 13.4347C17.493 13.1213 23.994 13.1213 23.994 13.1213H24.0079C24.0079 13.1213 30.5085 13.1213 34.8439 13.4347C35.4488 13.5068 36.7691 13.5132 37.9463 14.7482C38.8751 15.6888 39.1781 17.825 39.1781 17.825C39.1781 17.825 39.4864 20.334 39.4864 22.8429V25.195ZM20.8028 28.0455L20.8012 19.3344L29.1701 23.7048L20.8028 28.0455Z" fill="#77787b"></path>
                                            </mask>
                                            <g mask="url(#mask0_36_130)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M-19 -19H67.4V67.4845H-19V-19Z" fill="#77787b"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_36_130">
                                            <rect width="48" height="48" fill="white"></rect>
                                        </clipPath>
                                        <clipPath id="clip1_36_130">
                                            <rect width="48" height="48" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </li>


                    </ul>
                </div>
                <!-- End class="social" -->
            </div>
        </div>
        <!--<div id="sticker">
            <div id="contact_header" data-id="footer_cta" data-link="Contact us">
                Contact us
                <div style="float: right">
                    <img src="/img/minus.png" id="contact_header_img" />
                </div>
            </div>
            <div id="contact_message_sent" style="display: none;">
                Thank you. We will reply you shortly.
            </div>
            <div id="contact_message_error" style="display: none;">
            </div>
            <div id="contact_form_container" style="display: none;">
                <form id="contact_popup_form">
                    <input type="hidden" name="action" value="contact_popup_send">

                    <label for="name">Name *</label>
                    <input type="text" id="contact_form_name" name="name" value="" placeholder="Name" required maxlength="50" pattern="[a-zA-Z\s]+"><br>

                    <label for="email">Email Address *</label>
                    <input type="email" id="contact_form_email" name="email" value="" placeholder="E-mail" required="required" maxlength="100" pattern="^[a-zA-Z0-9._+-]+&#64;[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"><br>


                    <label for="name">Phone Number</label>
                    <input type="text" id="contact_form_countrycode" name="contact_form_countrycode" value="" placeholder="Country Code" required maxlength="10" pattern="[0-9-+]+" style="width: 50px;">&nbsp;<input type="text" id="contact_form_phone" name="contact_form_phone" value="" placeholder="Number" required maxlength="20" pattern="[0-9-()-+]+" style="width: 139px;"><br>-->
        
        <!--<div id="html_element">
                        <div id='recaptchaContactUs' class="g-recaptcha"
                             data-sitekey="6Leyy14hAAAAACy1_yyVYPvwDUez5gL4phFrBe7k"
                             data-callback="validateCaptchaAndContactus"
                             data-size="invisible"></div>
                    </div>
                    <label for="message">Message *</label>
                    <textarea id="contact_form_message" name="message" placeholder="" required="required" data-minlength="1" maxlength="500" pattern="[a-zA-Z0-9\s-.(),]+" onkeypress="return ( this.value.length < 500 );"></textarea><br>

                    <input type="button" value="Send" id="contact-button-v2" name="contact-button-v2" class="send-contact-news-letter">
                </form>

            </div>
        </div>-->
    </div>
</div>`
//custom footer end
const credits = document.createElement('div');
credits.innerHTML=`<div class="credits">
    <div class="container">
        <div class="row">
            <div class="span8">
                <p>© 2025 <a href="#" title="Emirates Official Store">Emirates Official Store </a>· <a href="/Condition_of_use" title="Terms &amp; Conditions" data-id="footer_internallink" data-link="Terms &amp; Conditions">Terms &amp; Conditions</a> · <a href="/Privacypolicy" title="Privacy policy" data-id="footer_internallink" data-link="Privacy policy">Privacy policy</a> · All Rights Reserved. </p>

            </div>
            <div class="span4 text-right hidden-phone">
                <p></p>
            </div>

        </div>
    </div>
</div>`
block.append(footer_element);
block.append(credits);
}
