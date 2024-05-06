
# Job Portal



## Run Locally

Here is the steps to run project locally

Clone the project
```bash
  git clone https://github.com/parthnariya/job-portal
```

Go to the project directory

```bash
  cd job-portal
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  npm run dev
```


## Tech Stack

**Development:** Reactjs with Typescript

**State Management:** Redux, Redux-toolkit

**Styling:** CSS





## Features

**Multiselect Dropdown**

- user can select multiple options at a time.
- here I have managed redux slice which manage all the filter state.
- implemented *useFilterData* hook which filterout the displayed data according to filters applied
- used debounce via *useDebaounce* hook while searching company name
    
**Job Card List**
- implemented *infinite scrolling* for fetching more data.
- used redux to store job details
- wrote asyncthunk logic of fetching data from the api.
- used *throttle* function to do some delay while fetching data.
- used grid to manage responsive (up to *mobile screen*) design of the card list.
