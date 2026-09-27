# VEMU Institute of Technology - Modern College Web Application

A modern, responsive, accessible, and high-performance official website for **VEMU Institute of Technology**, located at P. Kothakota, Tirupati–Chittoor Highway, Chittoor District, Andhra Pradesh, India.

Built strictly according to the hand-drawn homepage wireframe layout while incorporating factual institutional information from the official VEMU portal ([vemu.org](https://www.vemu.org/)).

---

## 🏛️ About VEMU Institute of Technology
- **College Code**: `VEMU`
- **Established**: 2008
- **Affiliation**: Permanently affiliated to Jawaharlal Nehru Technological University Anantapur (**JNTUA, Ananthapuramu**)
- **Approvals & Accreditations**: Approved by **AICTE**, New Delhi; Accredited by **NAAC** & **NBA**; **ISO 9001:2015 Certified**
- **Location**: P. Kothakota, Near Pakala, Tirupati–Chittoor Highway, Chittoor District, Andhra Pradesh – 517112
- **Campus**: 25-Acre Sprawling Green Campus with Advanced Laboratories & Hostels

---

## 📋 Wireframe Architecture & Homepage Sections

The homepage follows the exact 17-step layout order specified in the design wireframe:

1. **Top Accreditation & Utility Strip**: AICTE, JNTUA, NAAC, contact numbers, and official email.
2. **Top Header Area**:
   - **LEFT**: Responsive hamburger menu button & custom VEMU collegiate shield emblem.
   - **CENTER**: College Code `VEMU`, College Name (*VEMU Institute of Technology*), and Campus Address (*P. Kothakota, Tirupati–Chittoor Highway, Chittoor Dist., AP*).
   - **RIGHT**: Interactive **Login button** opening the Single Sign-On modal (Student, Faculty, Admin, Parent).
3. **Sticky Main Navigation Bar**:
   - Items: `Home`, `Admission`, `Academics`, `Department`, `Placements`, `Faculty`, `Student`, `Innovation` (plus `About` & `Contact`).
   - Mobile-responsive slide-out drawer with direct login accessibility.
4. **Hero Image Carousel**:
   - Configurable `heroSlides` data array with high-resolution imagery and zero-broken-image vector fallback.
   - Smooth automated transitions, previous/next controls, dot indicators (`● ● ● ●`), and overlay text.
5. **Notice Board & Announcements**:
   - Interactive category tabs: *All Notices*, *Examinations & Results*, *Admissions 2026*, *Academic & FDP*, *Circulars & Events*.
   - Live flash announcement banner, search input, notification details modal, and simulated PDF download.
6. **About VEMU Section**:
   - Two-column layout with 25-acre campus visual & Estd. 2008 accreditation highlights on the left; history, vision, mission, and "Read More" button on the right.
7. **Premier Departments Preview**:
   - Department cards with lab counts, faculty counts, student intake, and interactive details modal.
8. **Academics & Degrees Preview**:
   - Overview of B.Tech (UG), M.Tech (PG), MBA, MCA, and Polytechnic Diploma programs.
9. **Placements Dashboard**:
   - Animated statistics counters: **5500+ Students**, **290+ Teachers**, **15+ Departments**, **50+ Placement Companies**.
   - Grid of premier recruiting partners (TCS, Infosys, Wipro, Cognizant, Capgemini, HCL, Tech Mahindra, etc.).
10. **Faculty Mentors Preview**:
    - Faculty cards displaying name, designation, department, qualification, experience, and email.
11. **Student Hub & Portal Preview**:
    - Quick access cards for Results, ERP Login, Examination, Attendance, Timetable, Clubs, Library, and Moodle.
12. **Innovation & Entrepreneurship (IIC)**:
    - Ministry of Education (MoE) 4-Star Innovation Council highlights, patents filed, startups incubated, and student project prototypes.
13. **Recent Events, News & Achievements**:
    - National Hackathon wins, NBA re-accreditations, and corporate MoUs.
14. **At a Glance Campus Statistics**:
    - Fast facts matrix summarizing institutional identifiers.
15. **Contact Section**:
    - Address, phone numbers (+91 8886661148, +91 8886661128, +91 8886661150), email (`vemupat@gmail.com`), interactive Google Map embed, and contact message form with validation.
16. **Multi-Column Footer**:
    - Column 1: College logo, description, and social media icons.
    - Column 2: Quick Links (About, Admissions, Academics, Departments, Placements, Faculty, Contact).
    - Column 3: Student Links (Results, Notifications, Examination, Student Clubs, Alumni, Library, Moodle).
    - Column 4: Useful Links (Careers, R&D, IQAC, Innovation, AICTE, Mandatory Disclosure).
    - Bottom: © 2026 VEMU Institute of Technology. All Rights Reserved.

---

## 🧭 Page Routes & Architecture

| Route | Description |
| :--- | :--- |
| `/` | Complete Homepage following the wireframe layout |
| `/admission` | Comprehensive admission procedure, Category-A (EAPCET Convener), Category-B (Management/NRI), Lateral Entry, and validated 10-field Enquiry Form |
| `/academics` | Academic regulations (R20/R23), academic calendar, curriculum matrix, and course details |
| `/departments` | All 12 departments (CSE, CSE AI & ML, CSE AI, CSE AI & DS, CSIT, ECE, EEE, Mechanical, Civil, MBA, MCA, BCA) with filter tabs and modal view |
| `/placements` | Training & Placement Cell, animated statistics, recruiter directory, 4-year training roadmap, and recruiter facilities |
| `/faculty` | Comprehensive faculty directory with live search and filtering by Department and Designation |
| `/students` | Student services portal with interactive Hall Ticket Result simulator, clubs directory, and scholarship details |
| `/innovation` | Institution’s Innovation Council (IIC), Incubation Center, student prototypes, patents, and hackathons |
| `/about` | Institutional history, leadership messages from Chairman & Principal, and 25-acre campus facilities |
| `/contact` | Location guide, route connectivity from Tirupati & Chittoor, office timings, phone helplines, and contact form |

---

## 🛠️ Technology Stack

- **React 19**
- **TypeScript 7**
- **Tailwind CSS v4**
- **React Router Dom v7**
- **Lucide React** (icons)
- **Vite 8**

---

## 🚀 Setup & Development

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The application will be served at `http://localhost:3000`.

To build for production:

```bash
npm run build
```

To run lint checks:

```bash
npm run lint
```
