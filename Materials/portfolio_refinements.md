# Portfolio Page Refinements

## Design Principle for Project Cards

Every card follows: **What it is → What it achieved → How (1-2 key technologies).**
Tags already handle keyword coverage, so descriptions should NOT repeat every technology.
Keep each description to 2-3 sentences max.

---

## Refined Project Card Descriptions

### 1. Multithreaded File Server & Client

**Description:**
Concurrent file server in C that handles parallel client requests under load. Thread-pool with back-pressure control, hardened TCP/IP parsing, and full memory/concurrency validation via GDB and Valgrind.

**Tags:** C, POSIX, TCP/IP, GDB, Valgrind

**Footer:** GT coursework, architecture writeup available

---

### 2. Distributed File System

**Description:**
Multi-client file system in C++14 supporting concurrent store, fetch, and delete over gRPC. Features write-lock coordination and a self-syncing cache layer that detects local file changes automatically.

**Tags:** C++14, gRPC, Distributed Systems, inotify

**Footer:** GT coursework, architecture writeup available

---

### 3. CV Insect Detection Pipeline

**Description:**
End-to-end inference pipeline that detects and classifies insects in real-world images. Fine-tuned pre-trained deep learning models and optimized precision/recall trade-offs for production-grade accuracy.

**Tags:** Python, PyTorch, Computer Vision, Deep Learning

**Footer:** View on GitHub →

---

### 4. HAO Brands Backend

**Description:**
Backend services powering a live e-commerce platform. Cut API latency by 90% (3s to 300ms) with Redis caching and Kafka decoupling; Dockerized deployment with automated CI/CD.

**Tags:** Microservices, Docker, CI/CD, API Design

**Footer:** Proprietary, no source code available

---

## About Section

### Current Version
> I'm a software engineer specializing in backend systems, distributed computing, and AI/ML infrastructure. Currently pursuing my MSCS at Georgia Tech with a focus on computing systems.
>
> Previously, I built production microservices at HAO Brands, where I optimized API latency from 3 seconds to 300 milliseconds and established containerized CI/CD pipelines. I enjoy solving problems at the intersection of systems engineering and machine learning.

### Suggested Version
> Software engineer focused on backend systems, distributed computing, and AI/ML infrastructure, currently pursuing an MSCS at Georgia Tech (4.0 GPA).
>
> At HAO Brands, I owned core backend services for a live e-commerce platform, cutting p95 API latency by 90% and shipping Dockerized CI/CD from scratch. In grad school, I built a concurrent file server in C and a distributed file system in C++14/gRPC, both with full concurrency testing and containerized builds.
>
> I'm looking for full-time Systems, Infrastructure, or AI Engineering roles. US citizen, based in Houston.

### What Changed and Why
- **Paragraph 1:** Removed "specializing in" (generic filler). Added GPA since 4.0 is a strong signal.
- **Paragraph 2:** Split production work and grad projects into concrete one-liners. "Optimized API latency from 3 seconds to 300 milliseconds" was reframed as "cutting p95 API latency by 90%" because percentages catch eyes faster. "Established containerized CI/CD pipelines" was vague; "shipping Dockerized CI/CD from scratch" is more specific.
- **Paragraph 3:** Added explicit job target and US citizen status. Recruiters scanning your portfolio want to know: what are you looking for, and do you need sponsorship? Answer both upfront.
