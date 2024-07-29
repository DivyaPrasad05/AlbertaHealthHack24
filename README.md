
# MyBuddy

## Problem

We chose to address the challenge of helping children undergoing extensive rehabilitation. Kids often feel uncomfortable communicating their feelings, thoughts, and pain with trusted adults, which can impede their treatment as professionals may not accurately address the root problem. This ultimately prolongs their treatment process.

## Inspiration

Our application, MyBuddy, was inspired by the app "Manage My Pain" by ManagingLife. The core idea of MyBuddy is to allow users to communicate and track their pain in a user-friendly manner, providing valuable insights into their emotional and physical state.

## What It Does

MyBuddy is a web application designed to help kids feel more comfortable expressing their feelings. By gamifying the experience of reporting their emotions, we aim to make the process engaging and enjoyable. This approach encourages children to be open and honest about their emotions, which is especially beneficial during rehabilitation. The app helps children reintegrate into society by teaching them essential skills such as:

- Everyday skills
- Emotional intelligence
- Self-awareness
- Stress management
- Friend-making

Additionally, MyBuddy aims to teach kids internet safety skills, such as managing screen time and taking breaks to exercise.

## How We Built It

1. **Design**: We designed our web application using Figma and created images, including our beloved PoPo, using DALL·E 2.
2. **Development**: We developed the app using React.js and Node.js, creating various pages composed of different components.
3. **Integration**: We integrated the OpenAI GPT-4 model using its API to implement the chat feature.

## Challenges We Ran Into

- **API Integration**: Integrating the OpenAI API involved connecting it, training the model to generate appropriate prompts, and ensuring the outputs were engaging for our target audience. This required careful tuning and testing.
- **UI/UX Issues**: We faced challenges incorporating GPT-4 generated text into our React application. Aligning text with the design, splitting it into manageable components, and ensuring responsiveness across devices took considerable effort.

## Accomplishments We're Proud Of

- Successfully developing a fully operational app that has the potential to assist many children in Alberta in developing effective communication skills.
- Providing a valuable resource to support children’s growth and learning in an engaging and accessible way.

## What We Learned

- Creating a React application with routing for seamless navigation between pages and components.
- Integrating the OpenAI API into a React application, including setting up API calls, handling responses, and enhancing app functionality.

## What's Next for MyBuddy

- **Resources Page**: Adding links and phone numbers for children to access additional support.
- **AI-Generated Forms**: Implementing forms that get sent to pediatricians.
- **Speech Feature**: Adding a speech feature for children who have difficulty typing, including open-ended questions.
- **Doctor’s Graphs**: Providing graphs for doctors to visualize a child’s progress and data.
- **Character Selection**: Allowing kids to choose a character with voice options based on the chosen character.
- **Pain Reporting**: Enabling kids to select body parts to indicate pain.
- **Hardware Integration**: Exploring the use of wearables or computer vision (e.g., OpenCV) to assist children in reporting their pain.
