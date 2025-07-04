## Innowise Lab Internship: Level 0: Simple calculator 

Task: [View Task Requirements][task_link]

[task_link]: https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0

## How to Run the App
`Build & Deployment`

`The application was created through an npm package.`  
`To build the application locally, use webpack 5, the command to launch the build: npm run build.`  
`To deploy to gh-pages, use the command: npm run deploy.`


### Project structure 
<pre>
src/
├── index.js          # Main app entry point
├── styles/           # CSS stylesheets
│   └── main.css      # Main styles
└── utils/            # Calculator logic modules
    ├── ChangeTheme/  # Theme management
    │   └── changeTheme.js
    ├── CleaningFn/   # Input clearing
    │   └── cleaningFn.js
    ├── EqualsFn/     # Equality operations
    │   └── equals.js
    ├── MathFn/       # Core math operations
    │   └── mathFn.js
    ├── PercentFn/    # Percentage calculations
    │   └── percentFn.js
    └── PlusMinusFn/  # Sign switching
        └── plusMinus.js
</pre>


