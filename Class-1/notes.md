# Class Notes- Web Fundamentals and Intro to HTML

## Introduction

When we think about accessing a website, there's more happening behind the scenes than meets the eye. The URL, or Uniform Resource Locator, is what we usually type into the address bar to access a web page. However, the URL represents much more than just a web address. It's a pathway to the actual resource we're trying to access on the internet.


## Process
To break it down, when we enter a URL, the full form of URL comes into play: **Uniform Resource Locator**. This term accurately describes what it does — it locates a specific resource on the internet. This resource could be anything from a text document to a video, and the server's job is to provide us with that resource.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/110/original/upload_06940025115633bec555d541d722b876.png?1695109040)


A **server**, in this context, isn't a physical location but rather a program running somewhere in the world. This program generates the website content for us. It's important to note that a server is not a database. Rather, it's a responsive entity that resides somewhere in the vast expanse of the digital world. Imagine it as a helpful entity that receives your request and promptly serves you the requested information.


## Dairy Farm Analogy
Here's an analogy to help clarify the roles involved: Imagine you own a dairy farm and have numerous customers who regularly place orders for dairy products. To manage this influx of orders, you have an **operations team** that handles the order-taking process. They ensure that customers' requests are recorded accurately and are then forwarded to the **production team**.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/111/original/upload_9cef5b39282b29f01216e706282bbb64.png?1695109075)


In the context of websites, the operations team can be likened to the **DNS (Domain Name System)** system. The DNS system acts like an operations team, taking in requests and translating them into specific IP addresses. Think of DNS as a phonebook for the internet. When you enter a domain name like "scaler.com," the DNS system translates it to an IP address that points to a particular server.

However, it's important to note that the server itself is not where the data comes from. Instead, it's comparable to the dairy farm in our analogy—it's responsible for assembling and providing the products. In our website world, the actual data resides in a **database**. This database is akin to a **warehouse** for the dairy farm. All the products are stored there, ready to be accessed when needed.

When a request is made, the server applies specific protocols and data logic to retrieve the necessary information from the database. This process is what ensures that we receive the correct data as a response to our request.

Bringing it all together, the customers in our dairy farm analogy represent clients or users of the website. The operations team corresponds to the DNS system, efficiently directing requests. The dairy farm itself serves as the server, assembling and providing the desired information. And finally, the warehouse embodies the database, housing all the necessary data for the website.

In the grand scheme of things, even though we might simply see a website's interface through our browser, there's a complex interplay of components behind every web page that ensures we get the right information at the right time.


### HTML boiler plate code

#### Code
```html
<!doctype html>
<html lang = "en">
  <head>
    <meta charset = "utf - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1">
    <title>HTML demo</title>
  </head>
  <body>
    <h1>Hello, world ! </h1>
  </body>
</html>
```
* `<!DOCTYPE html>`: It's like saying, "Hey, we're starting an HTML page!" ( actually HTML5 which is the latest version of HTML )


* `<html lang="en">`: This is the main container of your page, and lang="en" means it's in English.

* `<title>Document</title>`: This is your page's title. You'll see it in the browser tab.

* Inside `<html>`, there are two parts:
`<head>`: Think of it as the brain of your page.

* `<body>`: This is where all the content you see on the webpage goes, like text and images.

* `<meta charset="UTF-8">`: This makes sure your page can understand a wide range of characters from different languages.
When you're coding, you might use characters that are specific to certain languages, like accents in French or characters in Chinese. 
The UTF-8 character set includes a huge array of these characters from different languages. Without specifying UTF-8, your browser might not correctly interpret and display these characters, leading to garbled text or question marks on your webpage.


* <meta name="viewport"...: This helps your page look good on phones and tablets.

### Structure your code
#### Div
Div elements are often used to structure and style sections of a web page, making it easier to apply CSS styles or JavaScript functionality to specific groups of content.

#### Code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <div>
        <h2>Welcome to Scalar Topics</h2>
        <p>
         We're glad you're here
        </p>
    </div>
</body>
</html>
```
#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/112/original/upload_b1f0471a9f3040bdd40eb364e9101835.png?1695109208)

#### Section
Sections are used to structure the content of a web page into logical parts, such as chapters, articles, or different sections of a document.

#### Code: 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <section>
        <h2>Section Title</h2>
        <p>This is a section of content.</p>
        
    </section>
</body>
</html>
```
### Tags and buttons

### Header tags

Header tags are used to structure the hierarchy of content on a webpage, with `<h1>` typically being the main title and `<h2>`, `<h3>`, and so on used for subsections. They help improve the accessibility and readability of content.
    
#### Code:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/113/original/upload_0666ce092529c955114832a23824d462.png?1695109287)

#### Anchor tags
Anchor tags are used to link to other web pages or resources, both within the same website or externally to other websites.

#### Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <section>
        <a href = "https://www.scaler.com/topics/autoboxing-in-java/">Learn autoboxing - in - java</a>
    </section>
</body>
</html>

```
#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/114/original/upload_a280807eb2f3df89d88691096051f0eb.png?1695109351)

#### Image tags
Image tags are used to display graphics, photographs, icons, or any other visual content on a webpage. The alt attribute provides alternative text for accessibility and SEO purposes.

#### Code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
   <img src = "img.jpg" alt = "Description of the image">
</body>
</html>
```
#### Output
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/115/original/upload_4f0ea4a42e75394bc79c854cbe6cafce.png?1695109387)

#### Buttons
Button elements are used to create clickable elements that can trigger actions when clicked, such as submitting a form or triggering JavaScript functions.

#### Code:
```html
<button type = "button"> BUTTON </button>
```
#### Output
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/116/original/upload_e873e3ecb310330c64503dafcf33ad53.png?1695109456)


## Semantic tags
Imagine a book with no headings, index, markings, chapters, just text all the way through Will it be easy to read? Nope!


if you have a book with intro, bibliography, index, chapters, then it makes it more usable and readable

Semantic tags gives a way of moving away from generic tags like <div> and <span> which don't convey specific meanings.

## Why Do I Need to Use Semantic HTML Tags?
Besides the obvious reason that semantic HTML tags are easier to read and understand—for example, by web developers reviewing the code—there are two more specific reasons why you should always use semantic tags.
### Accessibility
For sighted users, it’s easy to identify the various parts of a webpage. Headers, footers, and the main content are all immediately visually apparent.
However, it is not that easy for users who are **blind or visually impaired** and rely on screen readers.
The proper use of HTML semantic tags will allow these readers to understand your content better because their screen readers will communicate your content more accurately.
### SEO
Semantic HTML tags are important for [SEO](https://www.semrush.com/blog/what-is-seo/) (search engine optimization) because they indicate the role of the content within the tags.
That information gives [search engine crawlers](https://www.semrush.com/blog/site-crawler/), like Googlebot, a better understanding of your content. This increases the chances that your content will be selected as a candidate for ranking on the search engine results page (SERP) for relevant keywords.
To put it simply, pages with correctly implemented semantic HTML have an advantage in SEO over those that don’t.

Explain with this Diagram how Semantic tags makes the Layout more meaningful

<img src='https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/EN-Semantic-Search-Non-Semantic.webp'/>


Semantic tags were introduced with HTML5.

Create a new semantic.html file and copy the assets folder for portfolio , show the Demo and then start with writing basic Semantic HTML code


## Section Tag - A better alternate to Divs
Sections are used to structure the content of a web page into logical parts, such as chapters, articles, or different sections of a document.


#### Code: 
```html
<!DOCTYPE html>
<html>
<head>
    <title>Basic HTML</title>
</head>
<body>
    <section>
        <h2>Section Title</h2>
        <p>This is a section of content.</p>
    </section>
</body>
</html>
```


## Header tags

Header tags are used to structure the hierarchy of content on a webpage, with `<h1>` typically being the main title and `<h2>`, `<h3>`, and so on used for subsections. They help improve the accessibility and readability of content.
    
#### Code:

```html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
```

#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/113/original/upload_0666ce092529c955114832a23824d462.png?1695109287)


#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/114/original/upload_a280807eb2f3df89d88691096051f0eb.png?1695109351)




## Create the Structure of the Portfolio


#### Code:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
</head>

<body>
    <header>
        <div >
            <nav>
                <div>
                    <div>
                        <img src="./assets/scaler-academy logo 2.png" width="50px" alt="logo">
                    </div>
                    <div>
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Projects</a>
                        <a href="#">Blog</a></li>
                    </div>
                </div>
            </nav>
        </div>
        <div >
            <div>
                <img src="./assets/mrinal.jpg" alt="Profile">
            </div>
            <div>
                <h6>Mrinal Bhattacharya</h6>
                <h1>I'm a Frontend<br> <span>Developer</span></h1>
                <p>Description</p>
                <div>
                    <button>DOWNLOAD RESUME</button>
                </div>
            </div>
        </div>
    </header>

     <section>
        <div>
            <div>
                <img src="./assets/mrinal_profile.jpg" height="400px" alt="profile pic">
            </div>
            <div>
                <h1>About <span>Me</span></h1>
                <h3>Hello! I'm Mrinal Bhattacharya</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci distinctio obcaecati aliquid,
                    quia tempora quis optio repudiandae officia earum?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div>
                    <a href="#"><img src="./assets/linkedIn.png" width="40px"></a>
                    <a href="#"><img src="./assets/github logo.png" width="40px"></a>
                    <a href="#"><img src="./assets/leet logo.png" width="40px"></a>
                    <a href="#"><img src="./assets/twitter logo.png" width="40px"></a>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div>
            <h1>My Projects</h1>
            <p>I mostly work with HTML ,CSS ,JavaScript , React and Node</p>
            <div>
                <div>
                    <img src="./assets/calculator png.png">
                    <h2>Calculator</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
                <div >
                    <img src="./assets/cart png.png">
                    <h2>Shopping Cart</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
                <div>
                    <img src="./assets/to do list.png">
                    <h2>To do List</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, debitis?</p>
                </div>
            </div>
        </div>
    </section>


</body>

</html>
```











# Further Reading


## The Complete process of request/response cycle and IP resolution->

When we type in a website’s name
The browser parses the information contained in the URL.
the protocol used is (“https”)

Now suppose you go to the Browser and write something on the Search field

Suppose you write - www.scaler.com
this is a address somewhere stored in the Server but to locate this there must a unique identifier to it right?

Like if you send someone a message you will need there phone number or if you send someone a courier you will need there address (so to locate anaything in particular) you need a unique Entity.

For this case (www.scaler.com) has a unique address that is know as the IP address

* What exactly is an IP address?

Imagine you live in a town, and every house in the town has a unique address. This address helps people find your house when they want to visit you or send you something. In the world of the internet, devices like computers, smartphones, and servers also need unique addresses to communicate with each other. That's where IP addresses come in.

IP stands for "Internet Protocol," and an IP address is like a digital version of a house address. It's a set of numbers assigned to each device connected to the internet, helping data find its way to the right destination.

There are two types of IP addresses: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6). IPv4 addresses look like a series of four numbers separated by dots, like 192.168.1.1. IPv6 addresses are longer and use a combination of numbers and letters.

Just like your home address, IP addresses are used for different purposes. When you visit a website, your device uses the website's IP address to connect and fetch information. When you send an email, the email servers use IP addresses to locate and deliver your message to the recipient's device.

In summary, think of an IP address as a digital address for devices on the internet, helping them communicate and share information with each other, just like houses in a town have physical addresses for communication.


So www.scaler.com will have a IP address but how this will be retrived?

That's where DNS comes into the Picture

Let's Understand what DNS it's cache and lookup is and How it works

* DNS (Domain Name System):

The Domain Name System is like a phonebook for the internet. Instead of remembering numerical IP addresses, which can be difficult for humans, we use domain names (like www.scaler.com) to access websites and online services.

DNS translates these human-readable domain names into IP addresses that computers can understand. It's a distributed system that helps route traffic on the internet.

* DNS Cache:

DNS servers store recently accessed domain names and their corresponding IP addresses in a temporary memory called the DNS cache.
When you visit a website or use an online service for the first time, your computer queries a DNS server to get the IP address associated with the domain name. The result is then stored in the DNS cache for a certain period.

The DNS cache helps speed up subsequent visits to the same website or service, as your computer can use the stored information instead of querying the DNS server again.
If the address is not foubd in cache then the whole lookup process starts


Let's underdtand the lookup process


* DNS Lookup:

When you enter a website's domain name into your browser (e.g., www.example.com), your computer initiates a DNS lookup to find the corresponding IP address.
The DNS lookup process involves several steps:

Local DNS Resolver: Your computer first checks its local DNS cache to see if it already knows the IP address associated with the domain. If it does, the lookup is complete.

Recursive DNS Server: If the local cache doesn't have the information, your computer contacts a recursive DNS server. This server may have the IP address in its cache or will proceed to find it.

Root DNS Server, TLD DNS Server, Authoritative DNS Server: If the recursive server doesn't have the information, it contacts the root DNS server, then the Top-Level Domain (TLD) DNS server, and finally the authoritative DNS server for the specific domain. The authoritative server holds the actual IP address for the requested domain.

Response: The IP address is sent back through the same chain to your computer, which then stores it in its local DNS cache for future use.

In summary, DNS is a crucial system that translates human-readable domain names into machine-readable IP addresses, allowing us to access websites and online services. The DNS cache stores this information temporarily, and the DNS lookup process involves multiple steps to find the IP address associated with a given domain.


Now the IP address is obtained , Now What?

* TCP/IP handshaking Enters the picture


Initiating the TCP Connection:

After obtaining the IP address through DNS, your computer, as the client, initiates a TCP connection with the server hosting the website.
The client sends a "SYN" (synchronize) packet to the server. This packet includes the client's initial sequence number.

Server Responds:

The server, upon receiving the SYN packet, responds with a "SYN-ACK" (synchronize-acknowledge) packet. This packet acknowledges the receipt of the SYN packet and includes the server's initial sequence number.


Finalizing the Handshake:

Your computer, upon receiving the SYN-ACK packet, sends an "ACK" (acknowledge) packet back to the server. This packet confirms the receipt of the SYN-ACK packet and completes the three-way handshake.

The server, upon receiving the ACK packet, acknowledges the completion of the handshake.


Established Connection:

With the three-way handshake completed successfully, a TCP connection is established between your computer and the server. This connection is now ready for data exchange.


Data Exchange:

Once the TCP connection is established, your computer can send requests to the server, and the server can respond with the requested data. TCP ensures the reliable and orderly exchange of data by breaking it down into packets, managing their transmission, and reassembling them at the destination.


Closing the Connection:

After the data exchange is complete, the TCP connection is closed using a process known as the "four-way handshake." It involves sending a "FIN" (finish) packet from one side, receiving an acknowledgment, sending a corresponding FIN-ACK packet from the other side, and finally receiving a final acknowledgment.


![](https://scaler.com/topics/images/steps-of-a-3-way-handshake-for-terminating-the-connection.webp)




In summary, the TCP/IP handshake after retrieving an IP address through DNS involves a three-way handshake to establish a connection between the client and the server. Once the connection is established, data can be exchanged in a reliable and orderly manner. Finally, when the data exchange is complete, the connection is closed using the four-way handshake. This process ensures the integrity and reliability of communication over the internet.


## Extra Resources
1. **Online Resources:**
   - **HowStuffWorks - How the Internet Infrastructure Works:**
     - [HowStuffWorks - Internet Infrastructure](https://computer.howstuffworks.com/internet-infrastructure.htm)
 

2. **YouTube Videos:**
 - **"The Internet: Wires, Cables & WiFi" by ColdFusion:**
     - [The Internet: Wires, Cables & WiFi](https://www.youtube.com/watch?v=ZhEf7e4kopM)


3. **Documentation and Standards:**
   - **W3C (World Wide Web Consortium):**
     - [W3C Website](https://www.w3.org/)