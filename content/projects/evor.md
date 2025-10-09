---
title: "Expressive Value Learning for Scalable Offline RL"
# date: 2025-05-27
# layout: "single"
hide_title: true
hide_breadcrumbs: true
hide_site_title: true
---

<center>

<h1 style="text-align: center;">
  Expressive Value Learning for<br>Scalable Offline Reinforcement Learning
</h1>

[Nicolas Espinosa Dice](https://nico-espinosadice.github.io/)<sup>1</sup>,
[Kianté Brantley](https://xkianteb.github.io/)<sup>2</sup>,
[Wen Sun](https://wensun.github.io/)<sup>1</sup>

<sup>1</sup>Cornell University,
<sup>2</sup>Harvard University

Paper | [Code](https://github.com/nico-espinosadice/expressive-value-learning) | Thread

</center>

## Abstract

RL has yet to be fully leveraged in robotics, principally due to its lack of scalability. *Offline* RL offers a promising avenue by training agents on large, diverse datasets, avoiding the costly real-world interactions of *online* RL. Scaling offline RL to increasingly complex datasets requires expressive generative models such as diffusion and flow matching. However, existing methods typically depend on either backpropagation through time (BPTT), which is computationally prohibitive, or policy distillation, which limits scalability to larger base policies.
We consider the question of how to develop a scalable offline RL approach without relying on distillation or BPTT. We introduce *Expressive Value Learning for Scalable Offline RL* (<code style="color: #4bacc6;">EVOR</code>): a scalable offline RL approach that integrates *both* expressive policies *and* expressive value functions. <code style="color: #4bacc6;">EVOR</code> learns an optimal, regularized Q-function via flow matching during training. At inference-time, <code style="color: #4bacc6;">EVOR</code> performs inference-time policy extraction via rejection sampling against the expressive value function, enabling efficient optimization, regularization, and compute-scalable search *without retraining*. 