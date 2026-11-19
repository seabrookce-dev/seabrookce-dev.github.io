
// ========================================
// MED SCHOOL APPLICATION TRACKER
// ========================================


// ========================================
// 1. SIDEBAR NAVIGATION
// ========================================

const pages = document.querySelectorAll(".page-section");
const navButtons = document.querySelectorAll(".nav-btn");

function showPage() {

    const pageId = window.location.hash.substring(1);

    const selectedPage =
        document.getElementById(pageId) ||
        document.getElementById("home");

    const currentPage = selectedPage.classList.contains("page-section")
        ? selectedPage
        : document.getElementById("home");

    pages.forEach(function(page) {
        page.classList.toggle("active", page === currentPage);
    });

    navButtons.forEach(function(button) {

        const isActive =
            button.getAttribute("href") === "#" + currentPage.id;

        button.classList.toggle("active", isActive);

        if (isActive) {
            button.setAttribute("aria-current", "page");
        } else {
            button.removeAttribute("aria-current");
        }

    });

    window.scrollTo(0, 0);
}

window.addEventListener("hashchange", showPage);

showPage();


// ========================================
// 2. APPLICATION CALENDAR INFORMATION
// ========================================

// These dates are planning references.
// Exact dates must be updated when the
// official 2028 application schedule is released.

const calendarData = [

    {
        year: 2027,
        month: 4,
        summary: "Prepare and submit your primary application.",
        events: {
            4: "Projected AMCAS opening in early May. Begin entering coursework, activities and application information.",
            27: "Projected opening of AMCAS submission in late May. Submit when your application is complete and accurate."
        }
    },

    {
        year: 2027,
        month: 5,
        summary: "Application verification and transmission.",
        events: {
            1: "Suggested reminder: check that your official transcripts have been received.",
            15: "Suggested reminder: check verification status and begin preparing secondary essays.",
            25: "Projected late-June transmission of verified applications to medical schools."
        }
    },

    {
        year: 2027,
        month: 6,
        summary: "Secondary application season.",
        events: {
            1: "Secondary applications may begin arriving. Check your email and application portals.",
            15: "Suggested reminder: organize secondary deadlines, fees and essays."
        }
    },

    {
        year: 2027,
        month: 7,
        summary: "Interview season may begin.",
        events: {
            2: "Projected Early Decision deadline near August 1. Confirm the official date and eligibility if participating.",
            15: "Suggested reminder: begin practicing traditional and MMI interview questions."
        }
    },

    {
        year: 2027,
        month: 8,
        summary: "Interviews and secondary applications.",
        events: {
            15: "Suggested reminder: monitor interview invitations and check for incomplete application materials."
        }
    },

    {
        year: 2027,
        month: 9,
        summary: "Regular MD admissions decisions may begin.",
        events: {
            1: "Standard AAMC Early Decision notification reference date. Verify the official schedule.",
            15: "Under standard AAMC protocols, regular MD acceptance offers generally begin no earlier than October 15. Confirm school-specific policies."
        }
    },

    {
        year: 2027,
        month: 10,
        summary: "Interviews and school-specific deadlines.",
        events: {
            15: "Suggested reminder: review remaining primary and secondary application deadlines."
        }
    },

    {
        year: 2027,
        month: 11,
        summary: "Continued interviews and admissions decisions.",
        events: {
            15: "Suggested reminder: review application status, interview invitations and admissions correspondence."
        }
    },

    {
        year: 2028,
        month: 0,
        summary: "Interviews may continue into the spring.",
        events: {
            15: "Suggested reminder: check financial aid requirements and outstanding application materials."
        }
    },

    {
        year: 2028,
        month: 1,
        summary: "Plan to Enroll may become available.",
        events: {
            19: "Typical reference date for the opening of Plan to Enroll through AAMC. The exact 2028 date may differ."
        }
    },

    {
        year: 2028,
        month: 2,
        summary: "Compare acceptances and financial aid.",
        events: {
            15: "Suggested reminder: compare tuition, financial aid, second-look events and medical school locations."
        }
    },

    {
        year: 2028,
        month: 3,
        summary: "Narrow your medical school acceptances.",
        events: {
            15: "Standard AAMC reference date: narrow acceptances to no more than three schools. Verify the applicable 2028 deadline.",
            30: "Standard AAMC reference date: narrow acceptances to one school. Commit to Enroll typically becomes available around this time. Verify official dates and individual school policies."
        }
    },

    {
        year: 2028,
        month: 4,
        summary: "Waitlist movement and enrollment planning.",
        events: {
            1: "Suggested reminder: check school-specific enrollment deadlines and waitlist status.",
            15: "Waitlist movement may continue throughout spring and summer. Be prepared to respond quickly to offers.",
            31: "Suggested reminder: confirm your Commit to Enroll deadline, housing, immunizations and final transcript requirements. There is no universal May 31 deadline."
        }
    }

];


// ========================================
// 3. GENERATE MONTHLY CALENDARS
// ========================================

const calendarContainer =
    document.getElementById("calendars");

function createCalendar(data) {

    const monthCard = document.createElement("article");
    monthCard.className = "month";

    const date = new Date(data.year, data.month, 1);

    const monthName = date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            year: "numeric"
        }
    );

    const heading = document.createElement("h3");
    heading.textContent = monthName;

    const summary = document.createElement("p");
    summary.className = "month-summary";
    summary.textContent = data.summary;

    const daysGrid = document.createElement("div");
    daysGrid.className = "days";

    const detailBox = document.createElement("div");
    detailBox.className = "event-detail";

    detailBox.textContent =
        "Hover over or tap a yellow day for more information.";

    detailBox.setAttribute("aria-live", "polite");

    const weekDays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    weekDays.forEach(function(day) {

        const label = document.createElement("div");

        label.className = "weekday";
        label.textContent = day;

        daysGrid.appendChild(label);

    });

    const firstDay = date.getDay();

    const numberOfDays = new Date(
        data.year,
        data.month + 1,
        0
    ).getDate();

    // Blank spaces before the first day of the month

    for (let i = 0; i < firstDay; i++) {

        const blank = document.createElement("div");
        daysGrid.appendChild(blank);

    }

    // Generate each numbered day

    for (let day = 1; day <= numberOfDays; day++) {

        const important = Boolean(data.events[day]);

        const dayBox = document.createElement(
            important ? "button" : "div"
        );

        dayBox.className = "day";
        dayBox.textContent = day;

        if (important) {

            dayBox.classList.add("event");
            dayBox.type = "button";

            dayBox.title = data.events[day];

            dayBox.setAttribute(
                "aria-label",
                monthName + " day " + day +
                ": " + data.events[day]
            );

            function displayDetails() {

                detailBox.textContent =
                    monthName + " • Day " + day +
                    " — " + data.events[day];

            }

            // Desktop hover
            dayBox.addEventListener(
                "mouseenter",
                displayDetails
            );

            // Phone and tablet tap
            dayBox.addEventListener(
                "click",
                displayDetails
            );

            // Keyboard accessibility
            dayBox.addEventListener(
                "focus",
                displayDetails
            );

        }

        daysGrid.appendChild(dayBox);

    }

    monthCard.appendChild(heading);
    monthCard.appendChild(summary);
    monthCard.appendChild(daysGrid);
    monthCard.appendChild(detailBox);

    calendarContainer.appendChild(monthCard);

}

calendarData.forEach(createCalendar);


// ========================================
// 4. APPLICATION CHECKLIST DATA
// ========================================

const taskGroups = [

    {
        id: "coursework",
        title: "Prerequisite Coursework",
        tasks: [
            "General Biology I with lab",
            "General Biology II with lab",
            "General Chemistry I with lab",
            "General Chemistry II with lab",
            "Organic Chemistry I with lab",
            "Organic Chemistry II with lab",
            "Physics I with lab",
            "Physics II with lab",
            "Biochemistry",
            "English or writing-intensive coursework",
            "Statistics",
            "Math requirement, if applicable",
            "Psychology or behavioral science",
            "Sociology or social science",
            "Verify AP and transfer credit policies",
            "Confirm requirements for each school"
        ]
    },

    {
        id: "academics",
        title: "Academic Preparation",
        tasks: [
            "Calculate cumulative GPA",
            "Calculate science GPA",
            "Research school-specific GPA averages",
            "Research school-specific MCAT averages",
            "Create MCAT study schedule",
            "Register for the MCAT",
            "Complete MCAT preparation",
            "Take the MCAT",
            "Receive MCAT score",
            "Determine whether a retake is necessary"
        ]
    },

    {
        id: "experiences",
        title: "Experiences & Activities",
        tasks: [
            "Document clinical experience",
            "Document physician shadowing",
            "Document nonclinical volunteering",
            "Document research experience, if applicable",
            "Document leadership experience",
            "Record dates and activity hours",
            "Identify meaningful experiences",
            "Collect activity supervisor contact information"
        ]
    },

    {
        id: "primary",
        title: "Primary Application",
        tasks: [
            "Review Fee Assistance eligibility",
            "Apply for Fee Assistance, if eligible",
            "Create a medical school list",
            "Request official transcripts",
            "Request letters of recommendation",
            "Draft personal statement",
            "Revise personal statement",
            "Write activities descriptions",
            "Complete coursework entry",
            "Review application for accuracy",
            "Submit primary application",
            "Confirm application verification"
        ]
    },

    {
        id: "secondary",
        title: "Secondary Applications",
        tasks: [
            "Research school missions",
            "Prepare common secondary essays",
            "Check PREview requirements",
            "Check Casper requirements",
            "Complete required additional assessments",
            "Record secondary deadlines",
            "Submit secondary applications",
            "Confirm applications are complete"
        ]
    },

    {
        id: "interviews",
        title: "Interview Preparation",
        tasks: [
            "Research common interview questions",
            "Practice explaining why medicine",
            "Practice ethical scenarios",
            "Practice MMI questions",
            "Complete a mock interview",
            "Prepare professional interview clothing",
            "Prepare interview questions for schools",
            "Track interview invitations"
        ]
    },

    {
        id: "acceptance",
        title: "Acceptances & Enrollment",
        tasks: [
            "Record admissions decisions",
            "Review acceptance letter requirements",
            "Review deposit and refund policies",
            "Compare financial aid offers",
            "Attend second-look events, if available",
            "Review Choose Your Medical School instructions",
            "Narrow acceptances according to applicable protocols",
            "Confirm school-specific enrollment deadline",
            "Complete final enrollment requirements"
        ]
    }

];


// ========================================
// 5. SAVE CHECKLIST PROGRESS
// ========================================

const storageKey = "med-school-tracker-2027";

let savedProgress = {};

try {

    savedProgress = JSON.parse(
        localStorage.getItem(storageKey) || "{}"
    ) || {};

} catch (error) {

    savedProgress = {};

}

const allCheckboxes = [];

function saveProgress() {

    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify(savedProgress)
        );

    } catch (error) {

        console.warn("Progress could not be saved locally.");

    }

}

function createCheckbox(id, text) {

    const label = document.createElement("label");
    label.className = "task";

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.id = id;

    checkbox.checked = savedProgress[id] === true;

    const description = document.createElement("span");
    description.textContent = text;

    checkbox.addEventListener("change", function() {

        savedProgress[id] = checkbox.checked;

        saveProgress();
        updateProgress();

    });

    label.appendChild(checkbox);
    label.appendChild(description);

    allCheckboxes.push(checkbox);

    return label;

}


// ========================================
// 6. GENERATE APPLICATION CHECKLISTS
// ========================================

const taskContainer =
    document.getElementById("task-groups");

taskGroups.forEach(function(group) {

    const card = document.createElement("article");
    card.className = "card";

    const heading = document.createElement("h2");
    heading.textContent = group.title;

    card.appendChild(heading);

    group.tasks.forEach(function(task, index) {

        const taskId = group.id + "-" + index;

        card.appendChild(
            createCheckbox(taskId, task)
        );

    });

    taskContainer.appendChild(card);

});


// ========================================
// 7. MEDICAL SCHOOL DIRECTORY
// ========================================

const schools = [

    // SOUTH CAROLINA MD SCHOOLS

    {
        id: "usc-columbia",
        name: "University of South Carolina School of Medicine Columbia",
        city: "Columbia",
        state: "SC",
        type: "MD",
        url: "https://sc.edu/study/colleges_schools/medicine/"
    },

    {
        id: "usc-greenville",
        name: "University of South Carolina School of Medicine Greenville",
        city: "Greenville",
        state: "SC",
        type: "MD",
        url: "https://sc.edu/study/colleges_schools/medicine_greenville/"
    },

    {
        id: "musc",
        name: "Medical University of South Carolina",
        city: "Charleston",
        state: "SC",
        type: "MD",
        url: "https://medicine.musc.edu/"
    },

    // SOUTH CAROLINA DO SCHOOL

    {
        id: "vcom-carolinas",
        name: "Edward Via College of Osteopathic Medicine",
        city: "Spartanburg",
        state: "SC",
        type: "DO",
        url: "https://www.vcom.edu/"
    },

    // FLORIDA MD SCHOOLS

    {
        id: "uf",
        name: "University of Florida College of Medicine",
        city: "Gainesville",
        state: "FL",
        type: "MD",
        url: "https://admissions.med.ufl.edu/"
    },

    {
        id: "fsu",
        name: "Florida State University College of Medicine",
        city: "Tallahassee",
        state: "FL",
        type: "MD",
        url: "https://med.fsu.edu/"
    },

    {
        id: "usf",
        name: "USF Morsani College of Medicine",
        city: "Tampa",
        state: "FL",
        type: "MD",
        url: "https://health.usf.edu/medicine/"
    },

    {
        id: "ucf",
        name: "University of Central Florida College of Medicine",
        city: "Orlando",
        state: "FL",
        type: "MD",
        url: "https://med.ucf.edu/"
    },

    {
        id: "fau",
        name: "Florida Atlantic University Schmidt College of Medicine",
        city: "Boca Raton",
        state: "FL",
        type: "MD",
        url: "https://www.fau.edu/medicine/"
    },

    {
        id: "fiu",
        name: "Florida International University Herbert Wertheim College of Medicine",
        city: "Miami",
        state: "FL",
        type: "MD",
        url: "https://medicine.fiu.edu/"
    },

    {
        id: "miami",
        name: "University of Miami Miller School of Medicine",
        city: "Miami",
        state: "FL",
        type: "MD",
        url: "https://med.miami.edu/"
    },

    {
        id: "nova-md",
        name: "Nova Southeastern University Dr. Kiran C. Patel College of Allopathic Medicine",
        city: "Davie",
        state: "FL",
        type: "MD",
        url: "https://md.nova.edu/"
    },

    {
        id: "mayo-florida",
        name: "Mayo Clinic Alix School of Medicine — Florida Track",
        city: "Jacksonville",
        state: "FL",
        type: "MD",
        url: "https://college.mayo.edu/academics/mayo-clinic-alix-school-of-medicine/"
    },

    // FLORIDA DO SCHOOLS AND CAMPUSES

    {
        id: "nova-do",
        name: "Nova Southeastern University College of Osteopathic Medicine",
        city: "Davie / Clearwater",
        state: "FL",
        type: "DO",
        url: "https://osteopathic.nova.edu/"
    },

    {
        id: "lecom",
        name: "Lake Erie College of Osteopathic Medicine",
        city: "Bradenton",
        state: "FL",
        type: "DO",
        url: "https://lecom.edu/"
    },

    {
        id: "ocm",
        name: "Orlando College of Osteopathic Medicine",
        city: "Winter Garden",
        state: "FL",
        type: "DO",
        url: "https://ocom.org/"
    }

];


// ========================================
// 8. GENERATE MEDICAL SCHOOL CARDS
// ========================================

const schoolContainer =
    document.getElementById("schools");

schools.forEach(function(school) {

    const card = document.createElement("article");

    card.className = "school";
    card.dataset.state = school.state;
    card.dataset.type = school.type;

    const category = document.createElement("span");

    category.className = "eyebrow";
    category.textContent =
        school.state + " • " + school.type;

    const heading = document.createElement("h3");
    heading.textContent = school.name;

    const location = document.createElement("small");

    location.textContent =
        school.city + ", " + school.state;

    const website = document.createElement("a");

    website.href = school.url;
    website.target = "_blank";
    website.rel = "noopener noreferrer";
    website.textContent = "Official school website ↗";

    card.appendChild(category);
    card.appendChild(heading);
    card.appendChild(location);

    card.appendChild(
        createCheckbox(
            "school-" + school.id,
            "Research school requirements"
        )
    );

    card.appendChild(
        createCheckbox(
            "stats-" + school.id,
            "Review GPA and MCAT profile"
        )
    );

    card.appendChild(
        createCheckbox(
            "deadline-" + school.id,
            "Record application deadlines"
        )
    );

    card.appendChild(website);

    schoolContainer.appendChild(card);

});


// ========================================
// 9. FILTER MEDICAL SCHOOLS
// ========================================

const schoolFilter =
    document.getElementById("school-filter");

schoolFilter.addEventListener("change", function() {

    const selected = schoolFilter.value;

    const schoolCards =
        document.querySelectorAll(".school");

    schoolCards.forEach(function(card) {

        const matches =
            selected === "all" ||
            card.dataset.state === selected ||
            card.dataset.type === selected;

        card.hidden = !matches;

    });

});


// ========================================
// 10. UPDATE PROGRESS BARS
// ========================================

function updateProgress() {

    const total = allCheckboxes.length;

    const completed = allCheckboxes.filter(
        function(checkbox) {
            return checkbox.checked;
        }
    ).length;

    const percentage = total > 0
        ? Math.round((completed / total) * 100)
        : 0;

    const progressText =
        completed + " of " + total +
        " tasks complete • " +
        percentage + "%";

    document.getElementById(
        "home-progress"
    ).textContent = progressText;

    document.getElementById(
        "check-progress"
    ).textContent = progressText;

    document.getElementById(
        "home-bar"
    ).value = percentage;

    document.getElementById(
        "check-bar"
    ).value = percentage;

}

updateProgress();


// ========================================
// 11. OFFICIAL RESOURCE LINKS
// ========================================

const resourceGroups = [

    {
        title: "Applications & Planning",
        links: [
            [
                "AMCAS Application",
                "https://students-residents.aamc.org/applying-medical-school-amcas/apply-medical-school-amcas-program"
            ],
            [
                "AAMC Application Timeline",
                "https://students-residents.aamc.org/applying-medical-school/timeline-application-and-admission-medical-school"
            ],
            [
                "AACOMAS / DO Applications",
                "https://www.aacom.org/become-a-doctor/apply-to-medical-school"
            ],
            [
                "AAMC Premedical Coursework",
                "https://students-residents.aamc.org/medical-school-admission-requirements/required-premedical-coursework-and-competencies"
            ]
        ]
    },

    {
        title: "MCAT & Admissions Tests",
        links: [
            [
                "MCAT Registration",
                "https://students-residents.aamc.org/register-mcat-exam/register-mcat-exam"
            ],
            [
                "MCAT Preparation",
                "https://students-residents.aamc.org/prepare-mcat-exam/prepare-mcat-exam"
            ],
            [
                "AAMC PREview",
                "https://students-residents.aamc.org/aamc-preview/aamc-preview-professional-readiness-exam"
            ],
            [
                "Casper Assessment",
                "https://acuityinsights.app/"
            ]
        ]
    },

    {
        title: "Medical School Research",
        links: [
            [
                "Medical School Admission Requirements (MSAR)",
                "https://students-residents.aamc.org/medical-school-admission-requirements/medical-school-admission-requirements"
            ],
            [
                "Free MSAR Reports",
                "https://students-residents.aamc.org/medical-school-admission-requirements/medical-school-admission-requirements-reports-applicants-and-advisors"
            ],
            [
                "AAMC GPA and MCAT Statistics",
                "https://www.aamc.org/data-reports/students-residents/data/facts-applicants-and-matriculants"
            ],
            [
                "Accredited MD Programs",
                "https://lcme.org/directory/accredited-programs/"
            ],
            [
                "DO Medical School Directory",
                "https://www.aacom.org/become-a-doctor/prepare-for-medical-school/us-colleges-of-osteopathic-medicine"
            ]
        ]
    },

    {
        title: "Financial Assistance",
        links: [
            [
                "AAMC Fee Assistance Program",
                "https://students-residents.aamc.org/fee-assistance-program/fee-assistance-program"
            ],
            [
                "Federal Student Aid",
                "https://studentaid.gov/"
            ],
            [
                "AAMC Financial Information",
                "https://students-residents.aamc.org/financial-aid"
            ],
            [
                "AACOM Application Information",
                "https://www.aacom.org/become-a-doctor/apply-to-medical-school"
            ]
        ]
    },

    {
        title: "Interviews & Admissions",
        links: [
            [
                "AAMC Interview Resources",
                "https://students-residents.aamc.org/getting-medical-school/interview-resources-medical-school-applicants"
            ],
            [
                "AAMC Acceptance Protocols",
                "https://students-residents.aamc.org/applying-medical-school-amcas/application-and-acceptance-protocols-applicants"
            ],
            [
                "Choose Your Medical School Tool",
                "https://students-residents.aamc.org/applying-medical-school-amcas/amcas-choose-your-medical-school-tool"
            ]
        ]
    }

];


// ========================================
// 12. GENERATE RESOURCE GUIDE
// ========================================

const resourceContainer =
    document.getElementById("resource-links");

resourceGroups.forEach(function(group) {

    const card = document.createElement("article");

    card.className = "card resource-card";

    const heading = document.createElement("h2");
    heading.textContent = group.title;

    card.appendChild(heading);

    group.links.forEach(function(resource) {

        const link = document.createElement("a");

        link.textContent = resource[0] + " ↗";
        link.href = resource[1];

        link.target = "_blank";
        link.rel = "noopener noreferrer";

        card.appendChild(link);

    });

    resourceContainer.appendChild(card);

});
