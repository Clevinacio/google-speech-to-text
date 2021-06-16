<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">Google Speech-To-Text with NodeJS</h3>

  <p align="center">
    Script in NodeJS to convert an audio file longer than one minute located on Google Cloud to text using Google Speech-To-Text API
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project was made to help who wants to 


### Built With

* [NodeJS](https://nodejs.org/en/)
* [Google Cloud](https://cloud.google.com/)
* [Google Speech-to-Text](https://cloud.google.com/speech-to-text)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You will need to have Node to execute this software.
* Windows (Chocolatey)
  ```sh
  choco install -y --force nodejs
  ```

* Ubuntu
  ```sh
  sudo apt install nodejs
  ```

* MacOS (Brew)
  ```sh
  brew install node
  ```

Also, you will need a Google Cloud account with Speech-to-Text API.
* [See documentation here](https://cloud.google.com/speech-to-text)
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Clevinacio/google-speech-to-text.git
   ```
2. Install packages
   * With NPM
   ```sh
   npm install
   ```

   * With Yarn
   ```sh
   yarn install
   ```
 3. Setup Environment Variable to auth Google Cloud services.
  * Windows 
   ```sh
   $env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
   ```
  * Linux or MacOS
   ```sh
   $env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
   ```
<!-- USAGE EXAMPLES -->
## Usage

In the code, you will have some comments to change the default URI to the archive you want and the path to the output file.





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Clevinacio/google-speech-to-text.svg?style=for-the-badge
[contributors-url]: https://github.com/Clevinacio/google-speech-to-text/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Clevinacio/google-speech-to-text.svg?style=for-the-badge
[forks-url]: https://github.com/Clevinacio/google-speech-to-text/network/members
[stars-shield]: https://img.shields.io/github/stars/Clevinacio/google-speech-to-text.svg?style=for-the-badge
[stars-url]: https://github.com/Clevinacio/google-speech-to-text/stargazers
[issues-shield]: https://img.shields.io/github/issues/Clevinacio/google-speech-to-text.svg?style=for-the-badge
[issues-url]: https://github.com/Clevinacio/google-speech-to-text/issues
[license-shield]: https://img.shields.io/github/license/Clevinacio/google-speech-to-text.svg?style=for-the-badge
[license-url]: https://github.com/Clevinacio/google-speech-to-text/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/cleverton-inácio-053179198/