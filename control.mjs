if ($('.next').hasClass("first-next")) {
    $("#taj1v1")[0].pause();
    $("#taj1v1")[0].currentTime = 0;
    $("#t1v2")[0].play();
    $(".fortaji").removeClass("avoidarrow");
    $(".fortaji").addClass("animate__bounceOutLeft");
    setTimeout(
        function() {
            $(".fortemi").removeClass("animate__bounceOutRight");
            $(".fortemi").addClass("animate__bounceInRight");
            $(".fortemi").addClass("temiarrow");
            $(".chathol").addClass("switchleft");
            $(".chathol").html("Children's rights are special laws that protect children and keep us safe and happy.<br><br>A child is anyone under the age of 18!");
            $(".normalback").removeClass("onyeka");
            $(".backimg").addClass("animate__bounceIn").removeClass("animate__bounceOut");
        }, 150);


    $(".first-next").addClass("seconde-next");
    $(".seconde-next").removeClass("first-next");

} else if ($('.next').hasClass("seconde-next")) {
    $("#t1v2")[0].pause();
    $("#t1v2")[0].currentTime = 0;
    $("#t1v3")[0].play();
    $(".chathol").html("Children's rights belong to all children everywhere even though they dont come from the same country as you, or don't have the same color as you or don't go to the same place of worship as you.");
    $(".seconde-next").addClass("thirde-next");
    $(".thirde-next").removeClass("seconde-next");

} else if ($('.next').hasClass("thirde-next")) {
    $("#t1v3")[0].pause();
    $("#t1v3")[0].currentTime = 0;
    $("#t1v4")[0].play();
    $(".chathol").html("Do you know how many children's rights there are? There are quite a number!");
    $(".thirde-next").addClass("fourthe-next");
    $(".fourthe-next").removeClass("thirde-next");
} else if ($('.next').hasClass("fourthe-next")) {
    $("#t1v4")[0].pause();
    $("#t1v4")[0].currentTime = 0;
    $("#t1v5")[0].play();
    $(".fortemi").removeClass("animate__bounceInRight");
    //$(".fortemi").addClass("inviza");
    $(".fortemi").addClass("animate__animated animate__bounceOutRight");

    setTimeout(
        function() {
            $(".chathol").removeClass("switchleft");
            $(".fortaji").addClass("avoidarrow");
            $(".fortaji").removeClass("animate__bounceOutLeft");
            $(".fortaji").addClass("animate__bounceInLeft");
            $(".chathol").html("I know! I know! I can name a very important one – All children have a right to survive and develop.<br><br>It means that all children have a right to live, to survive, to be protected and to grow.");
        }, 150);

    $(".fourthe-next").addClass("fifthe-next");
    $(".fifthe-next").removeClass("fourthe-next");
} else if ($('.next').hasClass("fifthe-next")) {
    $("#t1v5")[0].pause();
    $("#t1v5")[0].currentTime = 0;
    $("#t1v6")[0].play();
    $(".chathol").html("Other rights include: A right to education. Education should develop each child's personality and talents to the fullest.");
    $(".fifthe-next").addClass("sixthe-next");
    $(".sixthe-next").removeClass("fifthe-next");
} else if ($('.next').hasClass("sixthe-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("A right to quality healthcare, clean water, nutritious food and a clean evironment so that we can all stay healthy.");
    $(".sixthe-next").addClass("sixthe-p1-next");
    $(".sixthe-p1-next").removeClass("sixthe-next");

} else if ($('.next').hasClass("thirde-next")) {
    $("#t1v3")[0].pause();
    $("#t1v3")[0].currentTime = 0;
    $("#t1v4")[0].play();
    $(".chathol").html("Do you know how many children's rights there are? There are quite a number!");
    $(".thirde-next").addClass("fourthe-next");
    $(".fourthe-next").removeClass("thirde-next");
} else if ($('.next').hasClass("sixthe-p1-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Also a right to protection from violence, abuse or neglect from their parents or anyone else who looks after them.");
    $(".sixthe-p1-next").addClass("sixthe-p2-next").removeClass("sixthe-p1-next");

} else if ($('.next').hasClass("sixthe-p2-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes,<br>As a child you have a right to a Name and a family. Also have a right to say what you think should happen when adults are making decisions about you.");
    $(".sixthe-p2-next").addClass("sixthe-p3-next").removeClass("sixthe-p2-next");

} else if ($('.next').hasClass("sixthe-p3-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("My favourite game is tag which I play with my friend Halima. Halima is a refugee from Congo");
    $(".sixthe-p3-next").addClass("sixthe-p4-next").removeClass("sixthe-p3-next");

} else if ($('.next').hasClass("sixthe-p4-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Do you know children who come into a country as refugees such as Halima have the same rights as children who are born in that country?");
    $(".sixthe-p4-next").addClass("sixthe-p5-next").removeClass("sixthe-p4-next");

} else if ($('.next').hasClass("sixthe-p5-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Oh really Tami! I did not know that. So, does that mean that Halima has a right to quality education like me? ");
    $(".sixthe-p5-next").addClass("sixthe-p6-next").removeClass("sixthe-p5-next");

} else if ($('.next').hasClass("sixthe-p6-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes Taji. You are correct. All children have rights. <br><br>Do you also know that children in countries affected by war should receive special protection?.")
    $(".sixthe-p6-next").addClass("sixthe-p7-next").removeClass("sixthe-p6-next");

} else if ($('.next').hasClass("sixthe-p7-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("I think I remember hearing that somewhere. So that also means children have the right to information. ");
    $(".sixthe-p7-next").addClass("sixthe-p8-next").removeClass("sixthe-p7-next");

} else if ($('.next').hasClass("sixthe-p8-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes, that is why we are learning about our rights on Haki.");
    $(".sixthe-p8-next").addClass("sixthe-p9-next").removeClass("sixthe-p8-next");

} else if ($('.next').hasClass("sixthe-p9-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Are there any other rights Tami?");
    $(".sixthe-p9-next").addClass("sixthe-p10-next").removeClass("sixthe-p9-next");

} else if ($('.next').hasClass("sixthe-p10-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes, children have so many rights.You can learn  more about them on the African Children's Committee's website, on www.acewrc.africa. Or you ask your teachers at school.");
    $(".sixthe-p10-next").addClass("sixthe-p11-next").removeClass("sixthe-p10-next");

    // MODULE 2

} else if ($('.next').hasClass("sixthe-p11-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Taji, Do you know who is responsible for  making sure that children’s  rights are kept?");
    $(".sixthe-p11-next").addClass("six-p1-next").removeClass("sixthe-p11-next");

} else if ($('.next').hasClass("six-p1-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("I think Mummy, Daddy, Teacher , the Chief, the police And most of all the president.");
    $(".six-p1-next").addClass("six-p2-next").removeClass("six-p1-next");

} else if ($('.next').hasClass("six-p2-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes, Yes, Yes, It is the job of the entire community to make sure that children’s  rights are protected");
    $(".six-p2-next").addClass("six-p3-next").removeClass("six-p2-next");

} else if ($('.next').hasClass("six-p3-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("The community is also made up of everyone! Parents, children, neighbors, the police, the government and many other people");
    $(".six-p3-next").addClass("six-p4-next").removeClass("six-p3-next");

} else if ($('.next').hasClass("six-p4-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("But Temi,  do I have to do anything to also make sure my community is happy and safe?");
    $(".six-p4-next").addClass("six-p5-next").removeClass("six-p4-next");

} else if ($('.next').hasClass("six-p5-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Yes. You can be  respectful to your parents and other children as you play together");
    $(".six-p5-next").addClass("six-p6-next").removeClass("six-p5-next");

} else if ($('.next').hasClass("six-p6-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Ok. So tell me,  how do people take away your rights?");
    $(".six-p6-next").addClass("six-p7-next").removeClass("six-p6-next");

} else if ($('.next').hasClass("six-p7-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" People can take away your rights when they don’t allow you to do things which will help you grow as a child. For example, when they Stop you from going to school, they take away your right to an education");
    $(".six-p7-next").addClass("six-p8-next").removeClass("six-p7-next");

} else if ($('.next').hasClass("six-p8-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Also When you are sick and not taken to the hospital or given  medicine, they take away your right to a good health");
    $(".six-p8-next").addClass("six-p9-next").removeClass("six-p8-next");

} else if ($('.next').hasClass("six-p9-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" What about when I am helping my mummy in the farm, is she taking away my rights?");
    $(".six-p9-next").addClass("six-p10-next").removeClass("six-p9-next");

} else if ($('.next').hasClass("six-p10-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Not at all Taji,<br>You can help your mummy in the farm, but if helping your mum stops you from going to school or the work becomes too much for you and causes you to become injured or get sick,<br> Then yes, your rights have been taken away");
    $(".six-p10-next").addClass("six-p11-next").removeClass("six-p10-next");

} else if ($('.next').hasClass("six-p11-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Also, if you are asked or forced to work and someone else gets paid to make you work, that is called child exploitation.");
    $(".six-p11-next").addClass("six-p12-next").removeClass("six-p11-next");

} else if ($('.next').hasClass("six-p12-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Do you also know that no one is allowed to  touch you without your permission?");
    $(".six-p12-next").addClass("six-p13-next").removeClass("six-p12-next");

} else if ($('.next').hasClass("six-p13-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" What do you mean Tami? So my mommy and aunty can’t touch or hug me?");
    $(".six-p13-next").addClass("six-p14-next").removeClass("six-p13-next");

} else if ($('.next').hasClass("six-p14-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Not that way Taji, what I mean is that no one is allowed to  touch you inappropriately.<br><br> This  means that  no one should  touch your private parts or tell you to remove your clothes or take a photo of yourself while you are naked.");
    $(".six-p14-next").addClass("six-p15-next").removeClass("six-p14-next");

} else if ($('.next').hasClass("six-p15-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Really Tami? I didn’t know. What right would that be?.");
    $(".six-p15-next").addClass("six-p16-next").removeClass("six-p15-next");

} else if ($('.next').hasClass("six-p16-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" It is your right to privacy and when they touch you it is called sexual abuse and sexual exploitation");
    $(".six-p16-next").addClass("six-p17-next").removeClass("six-p16-next");

} else if ($('.next').hasClass("six-p17-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Thank you Tami, Now I Know...Tami, Is that all about child rights violations?");
    $(".six-p17-next").addClass("six-p18-next").removeClass("six-p17-next");

} else if ($('.next').hasClass("six-p18-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Yes, we are Finished for now! Remember it is very important to learn about your rights. This will make it easy for you to know when someone has taken away your rights");
    $(".six-p18-next").addClass("six-p19-next").removeClass("six-p18-next");

} else if ($('.next').hasClass("six-p19-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Yes, we are Finished for now! Remember it is very important to learn about your rights. This will make it easy for you to know when someone has taken away your rights");
    $(".six-p19-next").addClass("six-p20-next").removeClass("six-p19-next");

} else if ($('.next').hasClass("six-p20-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Also remember it is the  responsibility of all people in a community, including the President, to make sure all children  enjoy their rights!");
    $(".six-p20-next").addClass("seventh-p1-next").removeClass("six-p20-next");

    // MODULE 3

} else if ($('.next').hasClass("seventh-p1-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" So Temi, what happens  if someone takes away my right and I can't tell my mummy and daddy?");
    $(".seventh-p1-next").addClass("seventh-p2-next").removeClass("seventh-p1-next");

} else if ($('.next').hasClass("seventh-p2-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" That is a very good question Taji. There are many other people in the community like teachers, police and social workers that you can talk to in the communities");
    $(".seventh-p2-next").addClass("seventh-p3-next").removeClass("seventh-p2-next");

} else if ($('.next').hasClass("seventh-p3-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" You can also Call the Childline number 116. And you know what Taji, this number is  free from anywhere in Africa and you can use any telephone to call it.<br>So, when someone takes away your rights you can report them");
    $(".seventh-p3-next").addClass("seventh-p4-next").removeClass("seventh-p3-next");

} else if ($('.next').hasClass("seventh-p4-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" What does it mean to report Temi?");
    $(".seventh-p4-next").addClass("seventh-p5-next").removeClass("seventh-p4-next");

} else if ($('.next').hasClass("seventh-p5-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" When someone takes away your rights, you can report them to your teacher, the chief, the police and children’s organisation. <br><br>When you report them, the case can be taken to the courts where a Magistrate or Judge can try and help you");
    $(".seventh-p5-next").addClass("seventh-p6-next").removeClass("seventh-p5-next");

} else if ($('.next').hasClass("seventh-p6-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("But do you know sometimes, even the courts are not able to help you. If this happens, then you can submit your complaint to the African Children’s Committee");
    $(".seventh-p6-next").addClass("seventh-p7-next").removeClass("seventh-p6-next");

} else if ($('.next').hasClass("seventh-p7-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("Thank you Tami. So, is there a telephone number I can call this Committee? ");
    $(".seventh-p7-next").addClass("seventh-p8-next").removeClass("seventh-p7-next");

} else if ($('.next').hasClass("seventh-p8-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("No Taji. There are steps which are called reporting processes” which you must follow if you want the Committee to help you ");
    $(".seventh-p8-next").addClass("seventh-p9-next").removeClass("seventh-p8-next");

} else if ($('.next').hasClass("seventh-p9-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" First you will go to a Children’s Organisation and ask them to help you submit a complaint to the Committee. <br><br>They will then help you write a letter to the Committee. When the Committee receives your letter they will try to help solve your problem ");
    $(".seventh-p9-next").addClass("seventh-p10-next").removeClass("seventh-p9-next");

} else if ($('.next').hasClass("seventh-p10-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" So does that mean I can’t report to the Committee by myself? ");
    $(".seventh-p10-next").addClass("seventh-p11-next").removeClass("seventh-p10-next");



} else if ($('.next').hasClass("seventh-p11-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" It is much easier if you go through a Children’s Organisation or an NGO in your country to help you submit your complaint. It is these organisation’s job to help you. In Module 4, I will explain to you exactly what you need to do ");
    $(".seventh-p11-next").addClass("seventh-p12-next").removeClass("seventh-p11-next");

} else if ($('.next').hasClass("seventh-p12-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Thank you Tami. I can’t wait for Lesson 4 ");
    $(".seventh-p12-next").addClass("eighth-p1-next").removeClass("seventh-p12-next");

    // MODULE 4

} else if ($('.next').hasClass("eighth-p1-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" So, Taji, in the last 3 lessons, we  have learnt so much about children’s rights ");
    $(".eighth-p1-next").addClass("eighth-p2-next").removeClass("eighth-p1-next");

} else if ($('.next').hasClass("eighth-p2-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" We have learnt what children’s rights are, how to know if your rights have been taken away and what to do when someone takes away your rights. In this lesson we will learn the steps to make a complaint to Africa children’s committee ");
    $(".eighth-p2-next").addClass("eighth-p3-next").removeClass("eighth-p2-next");

} else if ($('.next').hasClass("eighth-p3-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" What are they? ");
    $(".eighth-p3-next").addClass("eighth-p4-next").removeClass("eighth-p3-next");

} else if ($('.next').hasClass("eighth-p4-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Let us learn this by the following  steps game ");
    $(".eighth-p4-next").addClass("eighth-p5-next").removeClass("eighth-p4-next");

    // GRAPH 1

} else if ($('.next').hasClass("eighth-p5-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Step 1 we call it the Identify step ");
    $(".eighth-p5-next").addClass("eighth-p6-next").removeClass("eighth-p5-next");

    // GRAPH 2

} else if ($('.next').hasClass("eighth-p6-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Taji at this step a child, group of children, adults or organizations see that children are not being treated well and their rights are being violated.<br><br>Taji, Can you say how children can be treated badly");
    $(".eighth-p6-next").addClass("eighth-p7-next").removeClass("eighth-p6-next");

} else if ($('.next').hasClass("eighth-p7-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" I think when children are on the street and are not in school");
    $(".eighth-p7-next").addClass("eighth-p8-next").removeClass("eighth-p7-next");

} else if ($('.next').hasClass("eighth-p8-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" it is really bad because they can not go to school or go to the hospital when they are sick");
    $(".eighth-p8-next").addClass("eighth-p9-next").removeClass("eighth-p8-next");

} else if ($('.next').hasClass("eighth-p9-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Very good Taji, what rights are being violated");
    $(".eighth-p9-next").addClass("eighth-p10-next").removeClass("eighth-p9-next");

} else if ($('.next').hasClass("eighth-p10-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Education and Health");
    $(".eighth-p10-next").addClass("eighth-p11-next").removeClass("eighth-p10-next");

} else if ($('.next').hasClass("eighth-p11-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Also Tami, bad people can make them work so that they can get money");
    $(".eighth-p11-next").addClass("eighth-p12-next").removeClass("eighth-p11-next");

} else if ($('.next').hasClass("eighth-p12-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("  oh yah, for girls they can be touched in a bad way");
    $(".eighth-p12-next").addClass("eighth-p13-next").removeClass("eighth-p12-next");

} else if ($('.next').hasClass("eighth-p13-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Very True Taji");
    $(".eighth-p13-next").addClass("eighth-p14-next").removeClass("eighth-p13-next");

} else if ($('.next').hasClass("eighth-p14-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" So What happens next");
    $(".eighth-p14-next").addClass("eighth-p15-next").removeClass("eighth-p14-next");

} else if ($('.next').hasClass("eighth-p15-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" As a child you can talk to organizations that work for children. Do you know any organizations that work for children.");
    $(".eighth-p15-next").addClass("eighth-p16-next").removeClass("eighth-p15-next");

} else if ($('.next').hasClass("eighth-p16-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Yes, Save the Children, Children Safe Organization, Let Children Play…. I cant remember any other organizations");
    $(".eighth-p16-next").addClass("eighth-p17-next").removeClass("eighth-p16-next");

} else if ($('.next').hasClass("eighth-p17-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" That is OK Taji, if you tap on the Pink burton it will show you websites of children organizations across Africa, you can send an email to talk to them");
    $(".eighth-p17-next").addClass("eighth-p18-next").removeClass("eighth-p17-next");

} else if ($('.next').hasClass("eighth-p18-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Thank you Tami, so what will the organizations do?");
    $(".eighth-p18-next").addClass("eighth-p19-next").removeClass("eighth-p18-next");

} else if ($('.next').hasClass("eighth-p19-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" The organizations will help the child write a complaint");
    $(".eighth-p19-next").addClass("eighth-p20-next").removeClass("eighth-p19-next");

} else if ($('.next').hasClass("eighth-p20-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Wait a minute TAMI, What is a complaint");
    $(".eighth-p20-next").addClass("eighth-p21-next").removeClass("eighth-p20-next");

} else if ($('.next').hasClass("eighth-p21-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" A complaint is  a written document that show how children are being treated badly, for how long and how many children are being treated badly. It also has what rights are being violated and who is violating them");
    $(".eighth-p21-next").addClass("eighth-p22-next").removeClass("eighth-p21-next");

} else if ($('.next').hasClass("eighth-p22-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" That is interesting Tami");
    $(".eighth-p22-next").addClass("eighth-p23-next").removeClass("eighth-p22-next");


} else if ($('.next').hasClass("eighth-p23-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" so for children living on the street, who is treating them badly. what rights are being violated and who is violating them");
    $(".eighth-p23-next").addClass("eighth-p24-next").removeClass("eighth-p23-next");


} else if ($('.next').hasClass("eighth-p24-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Aaaah, Taji…. Can we get help from the boys and girls who are reading or hearing us. Boys and girls try the next rights trivia. Remember you can always press back to remind yourself");
    $(".eighth-p24-next").addClass("eighth-p25-next").removeClass("eighth-p24-next");


} else if ($('.next').hasClass("eighth-p25-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Thank you Boys and Girls");
    $(".eighth-p25-next").addClass("eighth-p26-next").removeClass("eighth-p25-next");

} else if ($('.next').hasClass("eighth-p26-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" also write down how you think some children in your community are being treated badly, by who and what rights are being violet then tap next to move to STEP 2");
    $(".eighth-p26-next").addClass("eighth-p27-next").removeClass("eighth-p26-next");

} else if ($('.next').hasClass("eighth-p27-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Step 2");
    $(".eighth-p27-next").addClass("eighth-p28-next").removeClass("eighth-p27-next");

    // GRAPH 3

} else if ($('.next').hasClass("eighth-p28-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Wow, thank  you boys are girls for identifying how  children in your community are being treated badly.<br><br>Tami, what is the next step");
    $(".eighth-p28-next").addClass("eighth-p29-next").removeClass("eighth-p28-next");

} else if ($('.next').hasClass("eighth-p29-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Boys and Girls thank you for helping, the next step is  Local Options");
    $(".eighth-p29-next").addClass("eighth-p30-next").removeClass("eighth-p29-next");

} else if ($('.next').hasClass("eighth-p30-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Local options, what does that mean");
    $(".eighth-p30-next").addClass("eighth-p31-next").removeClass("eighth-p30-next");

} else if ($('.next').hasClass("eighth-p31-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" I was getting to that,<br> Local options is very important to deal with the problem. In every community there are ways to talk to other adults, This include talking to a parent or caregiver, a teacher or a person working with children. If that does not help, we can talk to the police and go to the local community leaders (they might be a chief or a traditional leader). The next step would be to go to the court");
    $(".eighth-p31-next").addClass("eighth-p32-next").removeClass("eighth-p31-next");

} else if ($('.next').hasClass("eighth-p32-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Each country has different courts that can help. We should always try to do this first starting at the bottom and if it does not help moving on to the court above. If the local court cannot help, then the next court in the same country should be tried first");
    $(".eighth-p32-next").addClass("eighth-p33-next").removeClass("eighth-p32-next");

} else if ($('.next').hasClass("eighth-p33-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html("  If nothing in the country helps or in some cases if it takes very long, then we can complain at the large committee that take care of children in Africa (African Committee of Experts on the Rights and Welfare of the Child or ACERWC)");
    $(".eighth-p33-next").addClass("eighth-p34-next").removeClass("eighth-p33-next");

} else if ($('.next').hasClass("eighth-p34-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" Identifying the wrong treatment of children Any child or adult or group or organisation that is in the community or higher in the country or even outside the country can see when there is something wrong with how children is treated and complain about this. There are a few important things to remember to make sure that the problem that can be submitted to the ACERWC");
    $(".eighth-p34-next").addClass("eighth-p35-next").removeClass("eighth-p34-next");

} else if ($('.next').hasClass("eighth-p35-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" <b>Step 2:</b><br>If nothing is done report to…. Like Thandi did to Ms… the NGO lady in Thandi's story.");
    $(".eighth-p35-next").addClass("eighth-p36-next").removeClass("eighth-p35-next");

} else if ($('.next').hasClass("eighth-p36-next")) {
    $("#t1v6")[0].pause();
    $("#t1v6")[0].currentTime = 0;
    $("#t1v7")[0].play();
    $(".chathol").html(" <b>Step 3:</b><br>If nothing is done, The NGO can help you go to court and report the matter.");
    $(".eighth-p36-next").addClass("eighth-p37-next").removeClass("eighth-p36-next");