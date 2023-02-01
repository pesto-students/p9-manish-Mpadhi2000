Exercise1.1:

1.When a user enters an URL in the browser, how does the browser fetch the desired result? 

Explain this with the below in mind and demonstrate this by drawing a diagram for the same. (2-3hours)

    a. What is the main functionality of the browser?

    b. High Level Components of a browser.

    c. Rendering engine and its use.

    d. Parsers (HTML, CSS, etc)

    e. Script Processors

    f. Tree construction

    g. Order of script processing

    h. Layout and Painting

When you point your browser at a URL like https://www.google.com, your browser must figure out which server on the Internet is hosting the site. It does this by looking up the domain, google.com, to find the address. Each device on the Internet — servers, cell phones, your smart refrigerator — all have a unique address called an IP address. An IP address contains four numbered parts: E.g.: - 8.8.8.8. But numbers like this are hard to remember! That’s where domain names come in. google.com is much easier to remember than 8.8.8.8, right. DNS helps our browser (and us) find servers on the Internet. We can do a DNS lookup to find the IP address of the server based on the domain name, google.com. 


**Solution (a):**    
Browser’s main function is to fetch the web pages from the server along with the necessary files like, images, flashes, videos etc, interpret them and then display it on the screen.    


**Solution (b):** 


![How do Web Browsers Work?. Behind the scenes of modern Web… | by Bibek Shah  | Medium](1.png)

*Figure 1: High Level Components of a browser*

1. **The user interface**:

This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

2. **The browser engine**: 

marshals’ actions between the UI and the rendering engine

3. **The rendering engine:**

**is** responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

4. **Networking**: 

for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

5. **UI backend**: 

This is used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform-specific. Underneath, it uses operating system user interface methods.

6. **JavaScript interpreter**: 

It is responsible for parsing and executing the JavaScript code embedded in a website. Once the interpreted results are generated, they are forwarded to the rendering engine for display on the user interface.** 

7. **Data storage**:

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as local Storage, Indexed DB, Web SQL and File System.

By default, the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS. Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

  **Solution (c):**  

![Rendering engine basic flow](2.png)

*Figure 2: Rendering engine basic flow*

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree, it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

So, we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can fi

**Solution (d):** 

![](3.png)

Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.

![](4.png)

When the parser is created the Document object is created. During the tree construction stage, the DOM tree with the Document in its root will be modified and elements will be added to it. Each node emitted by the tokenizer will be processed by the tree constructor. For each token the specification defines which DOM element is relevant to it and will be created for this token. The element is added to the DOM tree, and also the stack of open elements. This stack is used to correct nesting mismatches and unclosed tags. The algorithm is also described as a state machine. The states are called "insertion modes".

**Solution (e):** 

The script processor executes JavaScript code to process an event.

**Solution (f):**

HTML describes the contain and CSS applies the styling part. So, in the process of tree construction, The CSSOM and DOM are combined into a rendering tree, which is used to compute the layout of Visible element and serve as an input to the paint process that renders the pixels on the screen.

**Solution (g):**  

Script tags are executed in the order they appear. Means script which appear later on the page can depend on things scripts which appear earlier.

**Solution (h):** 
So now we have a render tree with all the information that is needed to create a visual page. Now, the renderer will use this information to create a Layout and then a Paint, we will talk about Layout and Paint in next point before that here's what the overall process looks like:

![A diagram displaying that DOM and CSSOM come together to form Render Tree and then the Layout happens and then at the end the Paint happens](5.png)

The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position, so it takes all the properties related to the position (height, width, position, top left right bottom, etc.) from the render tree and places the elements on the screen.

After layout, painting happens. Paint has properties like color, background color, border color, box shadow, etc. to paint the screen with colors.

After the paint, we see the content on the screen, and the first time we see something other than a white screen is called the "first paint." The term "first paint" is used in performance reports to show how long it took your website to show something on the screen.

