
// Define the URL of the JSON file
const jsonFileUrl = '/getModules/json/loadModulesInfo.json';

// Fetch the JSON file
fetch(jsonFileUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    if (data.loadModulesCode) {
      // Import the required modules from the JSON data
      const loadModulesCode = data.loadModulesCode;
      const title = data.title;
      const licenseDownloadPrompt = data.licenseDownloadPrompt;
      const licenseDownloadConfirmation = data.licenseDownloadConfirmation;
      const licenseDownloadRejection = data.licenseDownloadRejection;

      // Function to dynamically import modules from a directory
      async function importModulesFromDirectory(directory) {
        try {
          const moduleNames = ['getTerminal', 'getAppInfo', 'getStyles', 'getUserInfo', 'getTerminalCmds'];
          
          // Loop through module names and import them dynamically
          for (const moduleName of moduleNames) {
            const modulePath = `/getModules/${directory}/${moduleName}.js`;
            await import(modulePath);
          }
        } catch (error) {
          console.error('Error loading modules: ' + error);
        }
      }

      // Call the function to import modules from both directories
      importModulesFromDirectory('js');
      importModulesFromDirectory('json');

      // Set the document title and other variables as needed
      document.title = title;

      // Example: Ask to download the license
      let dl = confirm(licenseDownloadPrompt);
      if (dl === true) {
        // Perform download logic here
        console.log(licenseDownloadConfirmation);
      } else {
        // Handle rejection
        console.log(licenseDownloadRejection);
      }
    } else {
      throw new Error('loadModulesCode not found in JSON data');
    }
  })
  .catch(error => {
    console.error('Error loading or evaluating loadmodules info:', error);
  });
