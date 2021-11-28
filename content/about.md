---
title: "About"
draft: false
menu: main
weight: 1
---

Hello! I am currently a senior studying mathematics and computer science at [Harvey Mudd College](https://www.hmc.edu/), where I am a [Harvey S. Mudd Merit Scholar](https://www.hmc.edu/admission/afford/scholarships-and-grants/merit-based-scholarships/harvey-s-mudd-merit-award). 
<!-- My interests center around theoretical machine learning, as well as applications of machine learning towards fields including robotics and autonomous vehicles, astronomy and space exploration, medical imaging, and finance and trading.  -->

Listed below are some details about my [research experience](#research), [technical experience](#technical), [coursework](/img/EspinosaDice_Coursework.pdf) at Harvey Mudd College, [leadership experience](#leadership), [volunteer experience](#volunteer), as well as some [additional](#additional) notes. See [Miscellaneous](/miscellaneous) page for other information.

Pronouns: He/Him.

Last Updated: October, 2021.

# Research Experience {#research}
## [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) {#amistad}
**Machine Learning Researcher**  
*May 2020 - Present*  
In the summer of 2020, I worked as a machine learning researcher and team lead in the [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) under [Professor George D. Montañez](https://www.cs.hmc.edu/~montanez/), a lab at Harvey Mudd College focused on theoretical machine learning research. Our team that developed a probabilistic model of abductive logical reasoning, using a Bayesian network framework, that constructs novel explanations of observed effects for use in machine learning applications. The paper was published in the [International Conference on Agents and Artificial Intelligence](http://www.icaart.org/) (ICAART 2021) and was presented at the conference in February, 2021. 

In 2021, our research focused on developing theoretical bounds relating learning success, generalization error, and bias. We currently have a paper under review at the *[33rd International Conference
on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/)*. The paper will be linked once published.

Currently, our research is focused on proving generalization bounds on probabilistic abduction in artificial learning.


### Publications
[Espinosa Dice N, Kaye M, Ahmed H, Montanez G, "A Probabilistic Theory of Abductive Reasoning." *13th International Conference on Agents and Artificial Intelligence (ICAART 2021)*, Online, Feb 4-6, 2021.](https://www.scitepress.org/Papers/2021/101954/101954.pdf)

Paper under review at *[33rd International Conference
on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/)*.

<!-- Currently, our research is focused on developing theoretical bounds relating learning success, generalization error, and bias.
 -->

# Technical Experience {#technical}
## [Etsy](https://www.etsy.com/)
**Software Engineer Intern**  
*May 2021 – August 2021*  
Last summer (2021), I worked at [Etsy](https://www.etsy.com/) as a software engineer intern. I developed a transformer deep learning model with DistilBERT architecture using Tensorflow to identify safe search queries with over 91% accuracy. I improved query understanding at Etsy by retraining an existing transformer model that classifies search queries as
broad or direct, increasing accuracy by 9% and reducing model volatility.


## [Viasat](https://www.viasat.com/) {#viasat}
**Software Engineer Intern**  
*May 2019 - August 2019*  
In the summer of 2019, I interned at [Viasat](https://www.viasat.com/) as a software engineer on the [NextGen TDL](https://www.viasat.com/products/next-gen-link16) team. Our intern team of three designed and built a heads-up display that improved the situational awareness of soldiers by connecting to a [Link 16](https://www.viasat.com/products/link-16-tactical-data-links) radio network – a tactical data link network – in order to receive, display, and send information. The project was [presented](https://www.linkedin.com/posts/viasat-government_ausa2019-nationalasset-activity-6591002603256115200-3vmt) by Viasat at the [2019 Association of the United States Army](https://ausameetings.org/2019annualmeeting/) conference. 

We used a [Microsoft HoloLens](https://www.microsoft.com/en-us/hololens) as the hardware for the display. (The United States Army recently agreed to a $480 million [contract](https://www.forbes.com/sites/davidhambling/2020/05/22/battlefield-augmented-reality-gets-real/#44d261917d8e) with Microsoft specifically for the HoloLens, a “mixed reality” headset). I was personally responsible for enabling the communication between the HoloLens and the Link 16 radio network. To achieve two-way communication, I exposed URL routes on a web server that was connected to the Link 16 network, allowing the encrypted Link 16 messages to be acquired through an HTTP GET request. I built a REST API using the [CherryPy](https://cherrypy.org/) Python library; the REST API issued the web requests to the web server. 

Additionally, I developed the global runtime manager in C# to handle the distribution of the Link 16 messages that were acquired by the REST API. The information was parsed and then distributed into the display’s “assets,” which included a map, compass and radar. Using the Link 16 radio data, I created an interactive and dynamic map, allowing soldiers to view friendly and hostile units in their area.

## [General Assembly: Data Science Course](https://generalassemb.ly/education/data-science/new-york-city)
**Student**  
*June 2017 - August 2017*  
In the summer of 2017, I took [General Assembly's](https://generalassemb.ly/) [data science course](https://generalassemb.ly/education/data-science/new-york-city), taught in New York City. During the course, we learned how to build machine learning algorithms – including decision trees, random forest regression and classification models, K-nearest neighbors, and logistic regression. We used Python's [Pandas](https://pandas.pydata.org/) and [NumPy](https://numpy.org/) libraries for collecting and cleaning the data, and we used the [Scikit-Learn](https://scikit-learn.org/stable/) library for implementing the models.

As part of the final project for the course, I built a random forest regression model in Python to predict the final sale prices of Iowa houses with over 90% accuracy. I then presented the model’s results to General Assembly faculty and students. The project is available on [Github](https://github.com/nico-espinosadice/house-price-prediction) and [Housing_Prices_Analysis.pdf](/img/Housing_Prices_Analysis.pdf).

## [Coursework](/img/EspinosaDice_Transcript.pdf) {#coursework}
A list of the mathematics and computer science courses I have taken is available [here](/img/EspinosaDice_Transcript.pdf).

<!-- In terms of coursework, I have enjoyed both applied mathematics and computer science courses – including [mathematics of big data](https://math189bigdata.github.io/index.html), data structures and program development, and algorithms – and theoretical courses such as abstract algebra and real analysis. A full list of the coursework that I have taken is available [here](/img/EspinosaDice_Coursework.pdf).
 -->

# Leadership Experience {#leadership}
## [Harvey Mudd College](https://www.hmc.edu/)
*2018 - Present*  
[Honor Board](https://www.hmc.edu/ashmc/honor-code/) (Judiciary Board Chair), [Society of Professional Latinx in STEM](https://www.facebook.com/HarveyMuddSPLS/) (former Public Outreach Director), Grader and Tutor (CS151: Artificial Intelligence), [Mudd's Amateur Rocketry Club](https://www.hmc.edu/ashmc/chartered-clubs/) (former Treasurer, HPR Level 1 Certified), [Claremont Philosophers](https://www.facebook.com/groups/claremontphilosophers/).

### [Honor Board](https://www.hmc.edu/ashmc/honor-code/)
**Judiciary Board Chair**  
*2018 - Present*  
[Chair, 2020]  
Oversee twenty-two students on Harvey Mudd College’s [Honor Board](https://www.hmc.edu/ashmc/honor-code/), responsible for upholding the [Honor Code](http://catalog.hmc.edu/content.php?catoid=9&navoid=342).  
Chair hearings regarding Honor Code violations and mediate settlements between students and faculty.

[Member, 2018 - 2019, 2021]  
Represent the Class of 2022 on Harvey Mudd’s Honor Board, the group responsible for matters concerning the Honor Code.  
Serve on judiciary and disciplinary hearings regarding possible violations of the Honor Code.

<!-- ## [Montclair Kimberley Academy](https://www.mka.org/)
*2014 - 2018*  
WeCode Organization (Founder and President), Varsity Math Team (Captain), Executive Committee (Chair), Peer Leader Program (Mentor), Varsity Soccer (Captain), Science Bowl (Member). -->

# Volunteer Experience {#volunteer}

### [Uncommon Good](https://uncommongood.org/)
**Mathematics Tutor**  
*2018 - May 2020*  
Led biweekly STEM tutoring sessions for high school students through [Uncommon Good](https://uncommongood.org/) and in partnership with Harvey Mudd College’s [Society of Professional Latinx in STEM](https://www.facebook.com/HarveyMuddSPLS/) (SPLS). Served as SPLS’s Public Outreach Director and coordinate the tutoring sessions with Uncommon Good.

### [Prison Education Project](http://www.prisoneducationproject.org/index.html)
**Team Lead**  
*2018*  
Developed and taught a chemistry course for incarcerated individuals at the California Rehabilitation Center.

### [STEM Together](http://www.montclairlibrary.org/news-events/summer-coding-with-nico-espinosa-dice/)
**Founder and President**  
*2015 - 2018*  
Founded an organization with the mission of increasing the accessibility of STEM education by helping schools and organizations develop STEM programs. Taught multiple computer programming courses for the [Montclair Kimberley Academy](https://www.mka.org/academics/primary) elementary school with a team of five instructors and forty students enrolled per year, and a summer course for the [Montclair Public Library](https://montclairlibrary.org/) with four instructors and eighteen students enrolled.


# Additional {#additional}

<!-- ### Impact Leadership Program
*2019 - Present*  
Cohort-based program focused on developing personal leadership skills aligned with values, strengths and ethics, with an emphasis on identity, consciousness, and well-being. -->

### [Startup 101](http://startup101.mka.org/)
*2018*  
Startup 101 is an immersive "startup experience" centered on design thinking and entrepreneurship, led by [Dr. Reshan Richards](https://www.linkedin.com/in/reshan-richards-50782b12/). For four weeks, we focused on a particular problem, researching and experimenting with possible solutions, spoke to industry experts, and ultimately developed a solution that was pitched at the [May Term](https://www.mka.org/student-life/mayterm) Symposium in 2018.

More information about our team's Startup 101 experience is available [here](http://startup101.mka.org/blog-40). I discuss my [experience](https://books.google.com/books?id=a6iODwAAQBAJ&pg=PA82&lpg=PA82&dq=make+yourself+clear+nico+espinosa+dice&source=bl&ots=6cX6hF4ONa&sig=ACfU3U3qcoEjfHpikMfLmxz399e63e6L_Q&hl=en&sa=X&ved=2ahUKEwjYr_7s76ToAhW_lnIEHfgZA58Q6AEwAHoECAoQAQ#v=onepage&q=make%20yourself%20clear%20nico%20espinosa%20dice&f=false) throughout Startup 101 in [Make Yourself Clear](https://www.amazon.com/Make-Yourself-Clear-Understand-Everything/dp/111955859X), a book by Dr. Reshan Richards and [Stephen J. Valentine](https://www.linkedin.com/in/stephen-valentine-563bab77/).

Related Blogs: [Constructivist Toolkit](https://www.constructivisttoolkit.com/2019/explain-everything-2020-hope) (Richards) and [Refreshing Wednesday](https://refreshingwednesday.com) (Valentine).
