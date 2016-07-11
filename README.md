# Run lsm-promo-web development environment


```
#!javascript

npm install
npm run debug
```

# Global State
{
    status: // flux state (newcomer, validating, subscribed, winner, looser)
    msisdn: // subscriptor phone number, which works as an ID
    signupInput: {
        name:
        email:
        phone:
        pin:
        etc
    },
    surveyInput: {
        question1: 4,
        question2: 5,
        question3: 2
    },
    prize: {
        displayName:
        redeemCode: xxxx
    }
}

# Actions
    1. START_FLOW: bootstrap on landing, setting everything on default state
    2. UPDATE_SIGNUP_INPUT: on form change
    3. SUBMIT_SUBSCRIBE: hits API, expects a 200 code
