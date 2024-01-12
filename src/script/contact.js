export function loadContact(){
    const main = document.createElement('main');
    main.id = 'contact';
    main.innerHTML = `
    <div class="hero">
        <h1>Contact Us</h1>
    </div>

    <div class="contact-container">
        <div class="content">
            <div class="location">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 500 88C 564 88 628 108 680 144C 794 222 843 379 794 507C 744 612 693 716 643 821C 617 870 601 930 548 957C 494 988 426 956 398 904C 340 788 285 670 228 553C 187 480 176 390 201 309C 237 182 362 88 494 88C 496 88 498 88 500 88C 500 88 500 88 500 88M 387 400C 387 462 438 512 500 512C 562 512 613 462 613 400C 613 338 562 287 500 287C 438 287 387 338 387 400C 387 400 387 400 387 400" transform=""></path>
                    </svg>
                </i>
                <p>1234 Main St <br> City, State 12345</p>
            </div>
            <div class="hours">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 550 250C 550 250 550 445 550 445C 565 458 575 478 575 500C 575 541 541 575 500 575C 499 575 497 575 496 575C 496 575 285 785 285 785C 266 805 234 806 214 786C 194 766 195 734 215 715C 215 715 425 504 425 504C 425 503 425 501 425 500C 425 478 435 458 450 445C 450 445 450 250 450 250C 450 222 472 200 499 199C 527 199 550 222 550 250C 550 250 550 250 550 250" transform="translate(1000,0) scale(-1,1) "></path>
                    </svg>
                </i>
                <p>
                    Mon-Thurs: 8am - 8pm 
                    <br>
                    Fri-Sun:8am - 11pm
                </p>
            </div>
            <div class="phone">
                <i>
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 640 179C 640 179 640 179 640 179C 662 156 692 140 724 139C 763 140 796 169 823 195C 853 222 865 262 859 301C 847 538 676 751 455 830C 391 851 323 870 254 861C 206 844 160 809 137 763C 129 729 145 692 169 668C 210 642 258 633 303 617C 355 600 404 631 446 658C 481 651 512 619 541 595C 590 550 632 495 657 431C 623 412 587 373 597 334C 605 281 614 226 640 179" transform="rotate(90, 500, 500) "></path>
                    </svg>
                </i>
                <p>
                    (222)-888 5555
                </p>
            </div>
            <form action="">
                <div>
                    <i>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="1000mm" height="1000mm" viewBox="0 0 1000 1000" style="width:1.33em; height:1.33em;vertical-align: middle;"><path id="path" fill="currentColor" d=" M 900 163C 934 163 962 191 962 225C 962 225 962 305 962 305C 962 305 579 569 579 569C 545 592 521 600 500 600C 479 600 455 592 421 569C 421 569 38 305 38 305C 38 305 38 225 38 225C 38 191 66 163 100 163C 100 163 900 163 900 163M 379 631C 379 631 379 631 379 631C 420 658 459 675 500 675C 541 675 580 658 621 631C 621 631 621 631 621 631C 621 631 962 396 962 396C 962 396 962 800 962 800C 962 834 934 862 900 862C 900 862 100 862 100 862C 66 862 38 834 38 800C 38 800 38 396 38 396C 38 396 379 631 379 631" transform=""></path></svg>
                    </i>
                    <p>Message Us</p>
                </div>
                <div class="input-box">
                    <input type="text" id="name" required>
                    <span>Full Name</span>
                </div>

                <div class="input-box ">
                    <input type="text" id="email" required>
                    <span>Email</span>
                </div>

                <div class="input-box">
                    <textarea name="" id="message" cols="30" rows="10"></textarea>
                    <span>Message</span>
                </div>

                <input type="submit" value="send">
            </form>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6178.896223206294!2d-76.71587040261835!3d39.255398094309555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81db59abc4bcb%3A0x7119b4daadb403d!2sUniversity%20of%20Maryland%2C%20Baltimore%20County!5e0!3m2!1sen!2sus!4v1705075776264!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    `
    return main;
}
