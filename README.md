[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# [nr1-funnelz] 

>NewRelic nr1 funnel visualization, based on funnel-graph.js

![example horizontal](https://github.com/newrelic-experimental/nr1-funnelz/blob/main/screenshots/horizontal.PNG)
## Installation/Building

>install the modules  --  npm install
>build the nerdpack   --  nr1 nerdpack:build
>serve the nerdpack   --  nr1 nerdpack:serve

> NOTE:  make sure to generate a new uuid for the nerdpack  --  nr1 nerdpack:uuid <br />
> All nr1 commands found here: https://developer.newrelic.com/explore-docs/nr1-cli 

## Customizations (Colors)
> All color changes must happen at the code level. 
> ### LABELS 
> By default, funnel-graph.js has a theme file applied to it located within the funnel-graph.js module under the dist path (theme.css)
> I have provided overrides of the labels css within the styles.css file located in the visualizations\funnel path.  
> You will find three documented overrides there where you can change the colors / fonts..etc 
> ### FUNNEL COLORS
> These are hard coded values found in index.js, where the Funnel obj is created  (e.g. colors = {['#039595','red']} )
> The array that is passed in can contain 1 to n values.   
> A gradient is created accross the values. 
> ### FUNNEL DIRECTION / GRADIENT DIRECTION
> Both of these are controlled within the vizualization/nerdpack, so don't worry about these. 
## Getting Started
> Follow the steps here https://developer.newrelic.com/explore-docs/nr1-cli to deploy the nerdpack with the visualization and add it to your dashboard.  




## Support

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

## Contributing
We encourage your contributions to improve [project name]! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License
nr1-funnelz is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
>[If applicable: The nr1-funnelz also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.]
