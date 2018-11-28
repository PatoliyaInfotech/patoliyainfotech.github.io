---
layout: api-doc
title: Naming Convention
---
All identifiers (such as types, type members, parameters and variables) should be named using words from the English language.

- Choose easily readable, preferably grammatically correct names. For example, *HorizontalAlignment* is more readable than *AlignmentHorizontal.*
- Favor readability over brevity. The property name *CanScrollHorizontally* is better than *ScrollableX* (an obscure reference to the X-axis).
- Avoid using names that conflict with keywords of widely used programming languages.


|  Language Element |Casing   |Example   |
| ------------ | ------------ | ------------ |
| Namespace  |Pascal   |   System.Drawing|
|  Type Parameter |Pascal   |TView   |
|  Interface |Pascal   |IBusinessService   |
|  Class, struct |Pascal   |AppDomain   |
|  Enum |Pascal   |ErrorLevel   |
|  Enum member |Pascal   |FatalError   |
|  Resource key |Pascal   |SaveButtonTooltipText   |
|  Private field |Pascal   |listItem   |
| Non-private field  |Pascal   |MainPanel   |
|  Property |Pascal   |BackColor   |
|  Event |Pascal   |Click   |
|  Method |Pascal   |ToString   |
| Local function  |Pascal   |FormatText   |
|  Parameter |Camel   |typeName   |
|  Tuple element names |Pascal   |(string First, string Last) name = ("John","Doe");   |
|   |   |  var name = (First: "John", Last: "Doe"); |
|   |   |  var name = (First: "John", Last: "Doe");|
|   |   |  (string First, string Last) GetName() => ("John", "Doe");|
|   Variables declared using tuple syntax| camel  |(string first, string last) = ("John", "Doe");|
|||var (first, last) = ("John", "Doe");|
|Local variable|Camel|listOfValues|

**Note:** in case of ambiguity, the rule higher in the table wins.

**Do not include numbers in variables, parameters and type members**
In most cases they are a lazy excuse for not defining a clear and intention-revealing name.

**Dont prefix fields**
For example, don't use g_ or s_ to distinguish static from non-static fields. A method in which it is difficult to distinguish local variables from member fields is generally too big. Examples of incorrect identifier names are: _currentUser, mUserName, m_loginTime.

**Don't use abbreviations**
For example, use ButtonOnClick rather than BtnOnClick. Avoid single character variable names, such as i or q. Use index or query instead.

**Name members, parameters and variables according to their meaning and not their type** 
- Use functional names. For example, GetLength is a better name than GetInt.
- Don not use terms like Enum, Class or Struct in a name.
- Identifiers that refer to a collection type should have plural names.

**Name types using nouns, noun phrases or adjective phrases**
For example, the name IComponent uses a descriptive noun, ICustomAttributeProvider uses a noun phrase and IPersistable uses an adjective. Bad examples include SearchExamination (a page to search for examinations), Common (does not end with a noun, and does not explain its purpose) and SiteSecurity (although the name is technically okay, it does not say anything about its purpose).

Do not include terms like Utility or Helper in classes. Classes with names like that are usually static classes and are introduced without considering object-oriented principles.

**Name generic type parameters with descriptive names**
- Always prefix type parameter names with the letter T.
- Always use a descriptive name unless a single-letter name is completely self-explanatory and a longer name would not add value. Use the single letter T as the type parameter in that case.
- Consider indicating constraints placed on a type parameter in the name of the parameter. For example, a parameter constrained to ISession may be called TSession.

**Do not repeat the name of a class or enumeration in its members**
```csharp
class Employee
{
	// Wrong!
	static GetEmployee() {...}
	DeleteEmployee() {...}
	
	// Right
	static Get() {...}
	Delete() {...}
	
	// Also correct.
	AddNewJob() {...}
	RegisterForMeeting() {...}
}
```

**Name members similarly to members of related .NET Framework classes**
.NET developers are already accustomed to the naming patterns the framework uses, so following this same pattern helps them find their way in your classes as well. For instance, if you define a class that behaves like a collection, provide members like Add, Remove and Count instead of AddItem, Delete or NumberOfItems.

**Avoid short names or names that can be mistaken for other names**
Although technically correct, statements like the following can be confusing:
```csharp
bool b001 = (lo == l0) ? (I1 == 11) : (lOl != 101);
```
**Properly name properties**
- Name properties with nouns, noun phrases, or occasionally adjective phrases.
- Name boolean properties with an affirmative phrase. E.g. *CanSeek* instead of *CannotSeek.*
- Consider prefixing boolean properties with* Is*, *Has*, *Can*, *Allows*, or *Supports*.
- Consider giving a property the same name as its type. When you have a property that is strongly typed to an enumeration, the name of the property can be the same as the name of the enumeration. For example, if you have an enumeration named *CacheLevel*, a property that returns one of its values can also be named *CacheLevel*.

**Name methods and local functions using verbs or verb-object pairs**
Name a method or local function using a verb like Show or a verb-object pair such as *ShowDialog*. A good name should give a hint on the *what* of a member, and if possible, the *why*.
Also, do not include And in the name of a method or local function. That implies that it is doing more than one thing, which violates the *Single Responsibility Principle*

**Name namespaces using names, layers, verbs and features**
```csharp
NHibernate.Extensibility
Microsoft.ServiceModel.WebApi
Microsoft.VisualStudio.Debugging
FluentAssertion.Primitives
CaliburnMicro.Extensions
```
**Note:** Never allow namespaces to contain the name of a type, but a noun in its plural form (e.g. Collections) is usually OK.

**Use a verb or verb phrase to name an event**
Name events with a verb or a verb phrase. For example: Click, Deleted, Closing, Minimizing, and Arriving. For example, the declaration of the Search event may look like this:
```csharp
public event EventHandler<SearchArgs> Search;
```
**Use -ing and -ed to express pre-events and post-events**
For example, a close event that is raised before a window is closed would be called Closing, and one that is raised after the window is closed would be called Closed. Don’t use Before or After prefixes or suffixes to indicate pre and post events.
Suppose you want to define events related to the deletion of an object. Avoid defining the Deleting and Deleted events as BeginDelete and EndDelete. Define those events as follows:
- *Deleting*: Occurs just before the object is getting deleted
- *Delete*: Occurs when the object needs to be deleted by the event handler.
- *Deleted*: Occurs when the object is already deleted.

**Prefix an event handler with “On”**
It is good practice to prefix the method that handles an event with “On”. For example, a method that handles its own Closing event should be named OnClosing. And a method that handles the Click event of its okButton field should be named OkButtonOnClick.

**Use an underscore for irrelevant lambda parameters**
If you use a lambda expression (for instance, to subscribe to an event) and the actual parameters of the event are irrelevant, use the following convention to make that explicit:
```csharp
button.Click += (_, __) => HandleClick();
```
**Group extension methods in a class suffixed with Extensions**
If the name of an extension method conflicts with another member or extension method, you must prefix the call with the class name. Having them in a dedicated class with the Extensions suffix improves readability.

**Postfix asynchronous methods with Async or TaskAsync**
The general convention for methods and local functions that return Task or Task<TResult> is to postfix them with Async. But if such a method already exists, use TaskAsync instead.

*References:*
*https://csharpcodingguidelines.com/*
*https://msdn.microsoft.com/en-us/library/ms229045(v=vs.100).aspx*

---
layout: api-doc
title: Performance Guidelines
---

**Consider using Any() to determine whether an IEnumerable<T> is empty**
When a member or local function returns an IEnumerable<T> or other collection class that does not expose a Count property, use the Any() extension method rather than Count() to determine whether the collection contains items. If you do use Count(), you risk that iterating over the entire collection might have a significant impact (such as when it really is an IQueryable<T> to a persistent store).

**Only use async for low-intensive long-running activities**
The usage of async won’t automagically run something on a worker thread like Task.Run does. It just adds the necessary logic to allow releasing the current thread, and marshal the result back on that same thread if a long-running asynchronous operation has completed. In other words, use async only for I/O bound operations.
