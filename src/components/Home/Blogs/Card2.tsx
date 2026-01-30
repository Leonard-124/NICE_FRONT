

import Navbar from "../../Navbar"
import Footer from "../Footer"
import learn from "./../../../assets/images/learn.jpg"
import { HiArrowLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

const Card2 = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="w-full bg-linear-to-br from-slate-50 via-white to-blue-50 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold mb-8 sm:mb-10 transition-colors"
          >
            <HiArrowLeft className="text-lg" />
            <span>Back to Blogs</span>
          </button>

          {/* Hero Image */}
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-8 sm:mb-10 lg:mb-12">
            <img
              src={learn}
              alt="AI and Pair Programming"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Article Title & Meta */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                TECHNOLOGY
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Will AI Kill Pair Programming?
            </h1>

            <div className="flex flex-col gap-2 sm:gap-3">
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">By CareerFoundry</span>
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Published January 2024 • 15 min read
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-linear-to-r from-red-500 to-red-600 transition-all duration-300 z-50" style={{ width: '35%' }}></div>

          {/* Main Content */}
          <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Pair programming is praised for its numerous benefits. The entire team understands the code base and the technologies used, ensuring continual progress even if some team members are absent or sick.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              It makes code reviews easier, if needed at all. It also results in high-quality code. This is where AI programming tools like GitHub's Copilot, frequently referred to as "AI pair programmers," could come in. Some coders might welcome these non-humans who could finally take away the bane of programming, and now we never have to "pair program" with annoying colleagues. Others might feel differently.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12 pb-8 sm:pb-10 lg:pb-12 border-b-2 border-gray-200">
              No matter your experience with pair programming, AI might be a potential game-changer. In this article, I'll explore the world of pair programming and try to answer the question, "Will AI Kill Pair Programming?"
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-10 sm:mt-12 lg:mt-16 mb-4 sm:mb-6">
              1. What is pair programming?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              The main premise of pair programming is that two people work on the same computer. This is, however, not applicable in every case, as there are companies with a version of pair programming known as "mob programming."
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              In mob programming, a group of developers (instead of a pair) work together on a single task. They could even work on the same computer. Remote pair programming has also changed the definition and scope of pair programming.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Remote pairing involves a pair working on a problem over the internet. It's great for work-from-home teams or companies with members spread across different locations, countries, or regions.
            </p>

            {/* Subsection */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              How pair programming works
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              In pair programming, two people work together, usually on one computer, and write code. They have a clear goal that they need to achieve and tend to ignore the bigger picture during the pairing period.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Sometimes, especially when working with unfamiliar technologies, tools, or code bases, the pair might take some time to do individual research separately before coming back to their pair.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Pairing can include other activities like taking the time to understand a user story and your team's definition of "done". A user story is an approach to building software features. It rephrases the features, with a focus on the end user.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              A team's definition of "done" refers to what the group considers a finished version that could be shared with the end user. This could be one user story or the entire product.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              For pair programming to work, you need to think about how to take breaks, manage your time, take turns, and rotate the pair's roles. If pairing remotely, use software that allows you access to the other person's code, for example, LiveShare on Visual Studio code.
            </p>

            {/* Subsection */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              Pair programming techniques
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              There are several pair programming techniques, ranging from the driver-navigator style, ping-pong, and strong style pairing. The important thing to note is that these approaches aren't cast in stone.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              You're free to take what works for you and even combine different strategies to make your pairing productive, fun, and less like a nightmare.
            </p>

            {/* Subsection */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              The driver-navigator style
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              The driver and navigator combination is the most popular pairing style. Let me explain briefly how it works. The driver is the person at the keyboard, writing the code. It's their job to talk through what they're currently doing.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              The navigator, on the other hand, is an almost real-time code reviewer. They can give suggestions to the driver, point out things that they may have missed, and even alert them to potential obstacles.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              The people in the driver and navigator roles switch after some time, depending on how long they're pairing. Pairing usually works best when one person is more knowledgeable and the other can learn from them.
            </p>

            {/* Subsection */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              The ping-pong technique
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              This style heavily relies on test-driven development (TDD). TDD is a programming approach where you write tests for your code before writing the code itself.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              In ping-pong, one pair writes the failing test (the ping) and the other person makes the test pass (the pong). Once the test passes, the pair can begin the next ping-pong cycle.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              You can choose to refactor the code at the end of each ping-pong cycle. The cycle, therefore, becomes ping-pong-refactor or red-green-refactor.
            </p>

            {/* Subsection */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              The strong-style technique
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              This technique is very similar to the driver-navigator one. However, in strong-style pairing, the navigator is the more experienced one of the pair. The driver is usually less experienced with the technology or code base.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              In this pairing approach, the driver should ask for the rationale behind the navigator's decisions after they're done implementing the solution. The strong-style technique is great for knowledge transfer. The driver can learn a lot from the navigator.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              2. Pros and cons of pair programming
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Pair programming is great by many standards, but it does have its share of problems. For example, it might be great for knowledge transfer, especially with the strong-style technique, but the driver may feel micromanaged. Let's explore some more pair programming advantages and disadvantages.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              Pros
            </h3>

            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-4">
              Knowledge-sharing
            </h4>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              When we pair, we learn from each other. The more experienced engineer can teach the less experienced one about a code base or technology. The less experienced person might know a new technology that can solve a problem.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Pairing also allows us to share good engineering practices and techniques we've learned along the way. Sometimes, it may be intriguing to see how someone else approaches solving a problem. You could learn something from that.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              As a less experienced engineer, the immediate feedback pair programming provides can go a long way in making you a better developer.
            </p>

            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-4">
              High-quality code
            </h4>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              When we pair, we have four eyes on the code. This means that we can see bugs and fix them early on in the Software Development Life Cycle (SDLC) and spend minimal time on code reviews.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Additionally, code resulting from pair programming is more likely to be compliant with industry standards, run quicker, and be refactored.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-10 sm:mt-12 mb-4 sm:mb-6">
              Cons
            </h3>

            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-4">
              Pairing for too long
            </h4>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Some learning and working environments require their developers to pair all the time, for the entire workday. While this may be highly productive at the outset, it may be detrimental to the team in the medium and long term.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              When you pair, we tend to focus 100% on the task at hand. If you work for an entire work or school day, you might be too exhausted, especially if you don't take breaks, which you can do when working alone.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              This could affect the code quality, creativity, and problem-solving capabilities within your team. Taking frequent breaks is a great way to keep your energy and focus levels up.
            </p>

            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mt-6 sm:mt-8 mb-4">
              Keyboard hogging
            </h4>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Keyboard hogging can be a problem when pairing. One pair might want to control the keyboard most of the time without allowing the other access.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              This is likely to happen when one pair feels that the other is "slow" or doesn't know much about the programming language or code base.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              3. So, will AI kill pair programming?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              We're still reeling from all the AI coding assistants that have come to make our lives easier as software engineers.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Of the 37,000 developers using AI tools in the 2023 StackOverflow Survey, the vast majority (82.55%) were using them to write code. However, the bigger question is whether these AI tools can actually help streamline pair programming.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              Comparing AI assistant tools with human pairs
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              If we think about the driver-navigator technique, is the AI the driver or navigator? In a programming pair, the driver writes code and the navigator gives suggestions.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              In this case, then, the AI cannot be the driver, as it only generates code snippets and would, in most cases, not write code to fulfill an entire user story. However, wouldn't it be the driver if it generated entire code snippets?
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              If we think of the AI as the navigator, it does give you code suggestions via code completions. However, isn't the navigator supposed to be the more knowledgeable or experienced one?
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              Would we be saying that the AI, in this case, knows more about the technologies and code base than the human? Trying to compare AI with humans might not be the best way to think about AI-powered pair programming.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              AI coding assistant tools as AI programmers
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              A better approach to thinking about AI code assistant tools like Copilot, CodeWhisperer, and TabNine is to think about them as what they actually are—AIs, not humans. Tools like Github's Copilot market themselves as "your AI pair programmer". Some developers think that these might be a little misleading, as most of the AI tools can provide only code suggestions and completions.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              These AI tools give suggestions that you already had in mind, only that it took you a little longer to type them out. They're, however, able to generate them quickly, making you faster as a developer.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              We're therefore more productive in terms of the speed at which we're able to complete scripts and user stories.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8 p-4 sm:p-6 bg-blue-50 border-l-4 border-blue-500 rounded">
              In an AI programming case study published by the Nielsen Norman Group, 70 programmers were asked to create an HTTP server in JavaScript. Some of them would use Copilot, and others wouldn't. The group using Copilot finished their task faster, showing a 126% increase in productivity.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              However, when the AI gets it wrong, debugging might end up taking up more time than the AI is actually saving us. An interesting perspective from which to look at this is that when coding, sometimes all we need is a suggestion, especially when facing a blocker. And the AI can help with exactly that.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              We can therefore say that there are a few pair programming aspects that AI has nailed, including debugging.
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 sm:mt-10 mb-4 sm:mb-6">
              Well, will it kill pair programming?
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              AI will kill the kind of pair programming that isn't properly implemented. For example, if pair programming is done in a way where I play the roles of both driver and navigator, then, in this case, the AI and I are better off.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              AI tools now understand context, giving suggestions based on the code base. This means that the AI and I can form a great pair. So, if your pairing options are a bad pair or a culture that doesn't encourage good pairing practices, then an AI like Copilot or CodeWhisperer can help.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              On the other hand, if pair programming is done effectively, then the need for an AI pair programmer is significantly reduced. If you and your partner agree on the goals that you need to work towards in a pairing session and one or both of you understand the technologies you're using and the code base, as well as your user story, then you'll not need an AI.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              However, if you're coding solo and are a bit stuck, then an AI can come in handy. It would be a technology that you can also consult when your colleagues aren't reachable, for example, if it's late at night, they're in a meeting, or they're on vacation.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-8 sm:mb-10 lg:mb-12">
              As a result of all this, it's safe to conclude that we don't know for sure whether AI will kill pair programming. However, for now, it's helpful to consider your specific use case when thinking about AI as a pair programmer.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-12 sm:mt-14 lg:mt-20 mb-4 sm:mb-6">
              4. Final thoughts
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Sometimes, we developers swear by riding solo. We may have had dreadful experiences with pair programming and would rather not take on roles that require pairing. There are right and wrong ways to do pair programming. For example, pairing for the entire workday might be counterproductive.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Pairing has its limits too. At times, the only way to solve a problem is to give your brain some quiet time to think, and it's difficult to do so when someone is constantly talking. Some engineers' closest experience with pairing is via rubber duck debugging. But we all agree that, from time to time, we all need help writing code.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              Whether your pair programming experience is positive or negative might be highly determined by how it was implemented in your work or learning environment. Surprisingly, this may translate to AI as well. You might need AI to work as your programming pair if your workplace or school culture doesn't support functional pair programming.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
              On the other hand, if you have a culture in which pair programming can thrive, then you may not need to use AI when pairing. You might need it, though, if you're writing code solo. The final say on whether to use the AI-generated code belongs to you, the human software engineer. To do this, you need to have a solid understanding of the technologies and code base that you're using.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8 p-6 sm:p-8 bg-linear-to-r from-red-50 to-orange-50 rounded-lg border-l-4 border-red-600">
              At CareerFoundry, we ensure that our students have the necessary skills in web development that can help them make informed decisions when using AI code assistants. Our Full-Stack Web Development Program mentors also ensure that our learners know how to pair a program with a human and understand the principles and techniques to do it successfully. This gives them a template to use AI to make them more productive engineers.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              If you're interested in reading more about AI and learning coding, check out these articles.
            </p>
          </article>

          {/* Article Footer */}
          <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">Article by</p>
                <p className="font-bold text-gray-900 text-lg">CareerFoundry</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-semibold text-gray-700 transition-colors text-sm sm:text-base">
                  Share Article
                </button>
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Subscribe to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Card2
