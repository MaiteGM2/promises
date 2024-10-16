Exercise: Simulating File Downloads

Context:
You are developing an application to manage file downloads. Each file can take a variable amount of time to download due to factors such as file size and connection speed. In some cases, downloads may fail due to network issues. Your task is to simulate these downloads using promises and provide different types of reports based on the Promise.all, Promise.allSettled, Promise.any, and Promise.race functions.
Requirements:
Implement a class called FileDownload, which simulates the download of a file.
Each instance of FileDownload will have a name and a size (in MB). The download time will be simulated using setTimeout, and will depend on the size of the file.
Use the Promise.all, Promise.allSettled, Promise.any, and Promise.race promises to generate different download results.

Tasks:

Create the FileDownload class:
The class must have a constructor that accepts a file name and size.
It must have a download() method that simulates the file download, returning a promise that resolves when the download is complete.

Simulate multiple downloads:
Instantiate multiple files and have them start downloading at the same time.

Implement the following:
Promise.all: Check how long all files take to download successfully.
Promise.allSettled: See which downloads completed and which failed.
Promise.any: Show which file was downloaded successfully first.
Promise.race: Show the first file that finished downloading or failed.

Simulate download failures:
Simulate that some downloads may fail due to connection problems (reject the promise).

Exercise goal
Practice using promises in JavaScript, especially advanced promise features.
Understand the differences between Promise.all, Promise.allSettled, Promise.any, and Promise.race.
Create and manipulate classes.
Simulate real-world conditions (such as variable download times and failures) to work with concurrency in JavaScript.
