---
title: "Simple, Scalable Distributional Reinforcement Learning"
# date: 2025-05-27
# layout: "single"
hide_title: true
hide_breadcrumbs: true
hide_site_title: true
---

<center>

<h1 style="text-align: center;">
  Simple, Scalable Distributional Reinforcement Learning<br>
</h1>

**[Nicolas Espinosa Dice](https://nico-espinosadice.github.io/)<sup>1</sup>**,
<!-- **[Yiyi Zhang](https://www.linkedin.com/in/yiyi-zhang-8b673964/)<sup>1</sup>**,
**[Yiding Chen](https://chenyd.github.io/)<sup>1</sup>**,
**[Bradley Guo](https://www.linkedin.com/in/bradleyzguo)<sup>1</sup>**,
**[Owen Oertell](https://owenoertell.com/)<sup>1</sup>**,
**[Gokul Swamy](https://gokul.dev/)<sup>2</sup>**, -->
**[Kianté Brantley](https://xkianteb.github.io/)<sup>2</sup>**,
**[Wen Sun](https://wensun.github.io/)<sup>1</sup>**

<sup>1</sup>Cornell University,
<sup>2</sup>Harvard University


Pre-print coming soon
<!-- [Paper](https://arxiv.org/abs/2505.22866) | [Code](https://github.com/nico-espinosadice/SORL) | [Thread](https://x.com/nico_espinosa_d/status/1933209680609788170) -->

</center>

## Abstract

Recent work on robot foundation models has demonstrated that vision–language–action (VLA) policies are a promising avenue for generalization across diverse tasks. However, fine-tuning such models via online reinforcement learning (RL) is often infeasible due to resource constraints. Offline RL is a promising alternative, but existing approaches typically require backpropagation through time---which is computationally expensive and can degrade pre-trained perception/language representations---or rely on distillation---which introduces compounding errors between teacher/student networks. Moreover, large VLA models remain slow at inference, necessitating asynchronous decision/execution techniques like action chunking. We introduce Scalable Distributional Reinforcement Learning (SDRL), a scalable framework for offline fine-tuning and inference-time scaling of large VLA-based policies. Instead of directly optimizing the policy, SDRL trains a distributional reward model to estimate a distribution over discounted rewards-to-go. Using the learned reward model, SDRL approximates the optimal Q-function, enabling inference-time policy extraction and scaling through best-of-N search without policy gradients or distillation. Our approach further incorporates action chunking to accelerate inference, yielding the best of both worlds: efficient training and scalable inference.
