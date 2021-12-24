---
title: "Research"
draft: false
menu: main
weight: 1
---

<!-- I am an undergraduate studying mathematics and computer science at [Harvey Mudd College](https://www.hmc.edu/), where I am a [Harvey S. Mudd Merit Scholar](https://www.hmc.edu/admission/afford/scholarships-and-grants/merit-based-scholarships/harvey-s-mudd-merit-award). I am advised by [Professor George D. Montañez](https://www.cs.hmc.edu/~montanez/) and [Professor Dagan Karp](https://www.math.hmc.edu/~dk/). I am a member of the [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html), led by Professor Montañez, where I conduct research in theoretical machine learning. I have also worked with [Profesesor Weiqing Gu](https://math.hmc.edu/gu/) in geometric deep learning. I applied to graduate school during the fall of 2021. I plan to pursue a Ph.D. in computer science next fall. My research interests are in deep learning and reinforcement learning. -->

<!-- Hello! I am currently a senior studying mathematics and computer science at [Harvey Mudd College](https://www.hmc.edu/), where I am a [Harvey S. Mudd Merit Scholar](https://www.hmc.edu/admission/afford/scholarships-and-grants/merit-based-scholarships/harvey-s-mudd-merit-award).  -->

<!-- Listed below are some details about my [research experience](#research), [technical experience](#technical), [coursework](/img/EspinosaDice_Coursework.pdf) at Harvey Mudd College, [leadership experience](#leadership), [volunteer experience](#volunteer), as well as some [additional](#additional) notes. See [Miscellaneous](/miscellaneous) page for other information. -->
<!-- 
Last Updated: October 2021. -->

## Geometric Deep Learning
[Department of Mathematics, Harvey Mudd College](https://www.hmc.edu/mathematics/student-mathematics-resources/mathematics-research/)  
*September 2021 - Present*  
Advisor: [Weiqing Gu](https://math.hmc.edu/gu/)

<!-- ## [Department of Mathematics, Harvey Mudd College](https://math.hmc.edu/gu/)
**Geometric Deep Learning**  
*September 2021 - Present*  
Advisor: Weiqing Gu -->

Under the direction of Professor Weiqing Gu at HMC, I built a temporal graph convolutional network (T-GCN) model to detect seizures in electroencephalogram (EEG) data. T-GCN models can detect the time of the seizure and its region in the brain by combining GCN and recurrent neural network (RNN) architectures. Unlike convolutional neural networks (CNNs), T-GCNs can handle the non-Euclidean signals in the EEG data. We are currently working to integrate EEG and gait data with geometric deep learning methods to diagnose Parkinson’s disease and analyze its progression.

<!-- Electroencephalogram (EEG) data is valuable in understanding neurological disorders and developing brain-computer interfaces because of its resolution and noninvasiveness. Convolutional neural networks (CNNs) have been applied to EEG data for feature extraction, but CNNs are ill-equipped to handle the non-Euclidean signals in the data. Such signals, however, can be handled by graph convolutional neural networks (GCNs). 
 -->

## Statistical Learning
[AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html)  
*October 2020 - Present*  
Advisor: [George D. Montañez](https://www.cs.hmc.edu/~montanez/)

<!-- ## [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html){#amistad}
**Statistical Learning**  
*October 2020 - Present*  
Advisor: George D. Montañez -->

Our work focused on generalization bounds in statistical learning. Because the paper is currently under review, I have removed detailed information about it.

<!-- Recent work in generalization bounds has taken information-theoretic perspectives, which can measure bias and generalization error. However, information-theoretic frameworks lack connections to geometric representations of bias. Another perspective for understanding machine learning algorithms is the algorithmic search framework (ASF), a formalism for casting machine learning algorithms as a type of search. The ASF offers theorems on overfitting and underfitting, bias, and expressivity of algorithms. However, it lacks generalization bounds. In collaboration with a Ph.D. student at the University of Pennsylvania, Professor Montanez, and another undergraduate at HMC, we introduced new generalization bounds into the ASF. The bounds relate the generalization error of learning algorithms to Kullback-Leibler divergence, entropy, and algorithm capacity for sub-gaussian and sub-exponential loss functions. They build on the bounds developed by Aolin Xu, Daniel Russo, James Zhou, and Maxim Raginsky. Furthermore, we derived the generalization error of a learning algorithm in terms of its inductive orientation. The inductive orientation of an algorithm is defined by a geometric representation of biases relative to an information resource, such as a dataset. It is a vector representation of inductive bias, and it can define algorithmic bias. Our paper thereby remedies the lack of connections between information-theoretic frameworks and geometric representations of bias. Our paper is currently under review at the [33rd International Conference on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/). I am the second of four authors on the submission.  -->

- Paper under review at the *[33rd International Conference
on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/)*.


## Graphical Models
[AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html)  
*May 2020 - October*  
Advisor: [George D. Montañez](https://www.cs.hmc.edu/~montanez/)

<!-- ## [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html)
**Graphical Models**  
*May 2020 - October 2020*  
Advisor: George D. Montañez -->
<!-- 
We developed a probabilistic theory of abductive reasoning. Abductive reasoning is generally partitioned into two categories, selective and creative, differentiated by the novelty of their explanations. While most research has focused on selective abduction, recent work has attempted to theoretically justify creative abduction and introduce causal principles into it. However, a unifying theory of selective and creative abduction does not exist. Additionally, how abduction relates to Bayesian confirmation theory, the dominant view, remains an open question. We developed a model that unifies selective and creative abduction by focusing on common cause abduction. Our model incorporates principles of causation by modeling abductive reasoning through a Bayesian network. Our model serves as a step towards unifying abduction and Bayesian confirmation theory. I integrated selective and creative abduction with causal principles by developing two algorithms. These algorithms expand on typical Bayesian network forms of inference by incorporating techniques from the Apriori algorithm. The algorithms allow the model to compute novel and common-cause explanations for observations. Crucial to the algorithms was a method of measuring the similarity of graph nodes. I developed one of the two similarity metrics we used, derived from the Jaccard index and edit-distance. I am the first of four authors on the paper published at the [13th International Conference on Agents and Artificial Intelligence (ICAART 2021)](http://www.icaart.org/). -->

We worked on a probabilistic theory of abductive reasoning. Specifically, we developed a model that unifies selective and creative abduction by focusing on common cause abduction. Our model incorporates principles of causation by modeling abductive reasoning through a Bayesian network. I integrated selective and creative abduction with causal principles by developing two algorithms, which allow the model to compute novel and common-cause explanations for observations. I also developed one of the two similarity metrics we used, derived from the Jaccard index and edit-distance, in order to compute the similarity of graph nodes. I am the first of four authors on the paper published at the [13th International Conference on Agents and Artificial Intelligence (ICAART 2021)](http://www.icaart.org/).

- [Espinosa Dice N, Kaye M, Ahmed H, Montanez G, "A Probabilistic Theory of Abductive Reasoning." *13th International Conference on Agents and Artificial Intelligence (ICAART 2021)*, Online, Feb 4-6, 2021.](https://www.scitepress.org/Papers/2021/101954/101954.pdf)

<!-- 

## [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) {#amistad}
**Machine Learning Researcher**  
*May 2020 - Present*  
In the summer of 2020, I worked as a machine learning researcher and team lead in the [AMISTAD Lab](https://www.cs.hmc.edu/~montanez/amistad.html) under [Professor George D. Montañez](https://www.cs.hmc.edu/~montanez/), a lab at Harvey Mudd College focused on theoretical machine learning research. Our team that developed a probabilistic model of abductive logical reasoning, using a Bayesian network framework, that constructs novel explanations of observed effects for use in machine learning applications. The paper was published in the [International Conference on Agents and Artificial Intelligence](http://www.icaart.org/) (ICAART 2021) and was presented at the conference in February, 2021. 

In 2021, our research focused on developing theoretical bounds relating learning success, generalization error, and bias. We currently have a paper under review at the *[33rd International Conference
on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/)*. The paper will be linked once published.

Currently, our research is focused on proving generalization bounds on probabilistic abduction in artificial learning. -->


## Publications
1. [Espinosa Dice N, Kaye M, Ahmed H, Montanez G, "A Probabilistic Theory of Abductive Reasoning." *13th International Conference on Agents and Artificial Intelligence (ICAART 2021)*, Online, Feb 4-6, 2021.](https://www.scitepress.org/Papers/2021/101954/101954.pdf)
2. Paper under review at the *[33rd International Conference
on Algorithmic Learning Theory (ALT 2022)](http://algorithmiclearningtheory.org/alt2022/)*.

<!-- Currently, our research is focused on developing theoretical bounds relating learning success, generalization error, and bias.
 -->
