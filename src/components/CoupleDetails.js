import React from 'react'
import '../App.css';
import brideImage1 from '../assets/images/pic4.png';
import groomImage1 from '../assets/images/pic5.png';
export const CoupleDetails = () => {
    return (
        <section class="wedding-couple-section section-padding" id="couple">
            <div class="container">
                <div class="row">
                    <div class="col col-xs-12">
                        <div class="gb groom">

                            <div className="img-holder wow fadeInLeftSlow" style={{
                                backgroundImage: `url(${groomImage1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                visibility: 'visible',
                                animationName: 'fadeInLeftSlow',
                            }}>
                                <img src={brideImage1} alt="" />
                            </div>
                            <div class="details">
                                <div class="details-inner">
                                    <h3>The groom</h3>
                                    <p>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <span class="signature">Subhransu</span>
                                    <ul class="social-links">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="gb bride">
                            <div class="details">
                                <div class="details-inner">
                                    <h3>The Bride</h3>
                                    <p>Hi I am suntina , dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                    <span class="signature">Shubhangi</span>
                                    <ul class="social-links">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="img-holder wow fadeInLeftSlow" style={{
                                backgroundImage: `url(${brideImage1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                visibility: 'visible',
                                animationName: 'fadeInLeftSlow',
                            }}>
                                <img src={groomImage1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        // <section class="section-features js--section-features" id="features">
        //     <div class="row">
        //         <div>
        //             <h2>Know about our peeps</h2>
        //         </div>
        //     </div>

        //     <div class="row js--wp-1">
        //         <div class="col span-1-of-4 box">
        //             <i class="ion-ios-infinite-outline icon-big"></i>
        //             <h3>GROOM</h3>
        //             <p>
        //                Hi i'm Subhransu maharana.
        //             </p>
        //         </div>
        //         <div class="col span-1-of-4 box">
        //             <i class="ion-ios-stopwatch-outline icon-big"></i>
        //             <h3>BRIDE</h3>
        //             <p>
        //             Hi i'm Shubhangi maharana.
        //             </p>
        //         </div>
        //     </div>
        //     <script src="resources/js/script.js"></script>
        // </section>

    )
}