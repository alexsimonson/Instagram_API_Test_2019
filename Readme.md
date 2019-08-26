<h1>Hashtag Image Viewer</h1>

<p>With this program, you can connect to my instagram account via their API and browse my images via an input hashtag</p>

<h2>How to use this application (android specific)</h2>
<ol>
    <li>If you're downloading this project, you will likely want to open the root folder and run "npm install" to get all relevant dependencies.</li>
    <li>You will need to open this with Android Studio.  Instructions on this can be found <a href='https://facebook.github.io/react-native/docs/getting-started.html'>here</a>.  Click on the react native cli quickstart tab to get started.</li>
    <li>Once you've opened a virtual android device, run the command "react-native run-android" within the instagram directory found in this project.</li>
    <li>From here, you can enter a hashtag into the text input field found on the virtual phone screen.</li>
    <li>Press the button or select from the drop down of hashtags to view related images with the given hashtag.</li>
    <li>(optional) you may change the access_token to your own account within the HashtagSelect.js file.  The variable is set on line 21.  If you need more information on how to retrieve this token, please follow the steps below or visit <a href='https://www.instagram.com/developer/authentication/'>Instagram's API Documentation</a></li>
</ol>

<h3>Retrieving your personal access_token</h3>
<ol>
    <li>Visit this <a href='https://api.instagram.com/oauth/authorize/?client_id=7df4ca60652b46839f848e3f36e04d98&redirect_uri=http://www.google.com&response_type=token'>link</a> and allow authentication with the Instagram API</li>
    <li>When that page redirects to google.com, their will be an access_token=(some characters) within the URL as a get parameter.  Copy the value of that get parameter and paste it into line 21 of the HashtagSelect.js file.  (see step 3 of how to use this application for more information)</li>
</ol>

<h4>Example hashtags available for my personal account</h4>
<ul>
    <li>api</li>
    <li>bird</li>
    <li>breakfast</li>
    <li>dog</li>
    <li>me</li>
</ul>