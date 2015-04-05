function init_page(){
// Populate volunteer positions
    var tickets = new VolunteerPosition("tickets", "you want to make sure that participants can make it to the event, and are kind and discerning", "images/tickets.jpg", "tickets15@burningflipside.com", "the ticket team is responsible for processing ticket requests for burning flipside, including holding the ticket lottery.");
    var ranger = new VolunteerPosition("ranger", "you are a friendly person that likes walking.", "images/rangers.jpg", "ranger15@burningflipside.com", "First and foremost, Rangers are members of the Burning Flipside community. We are Rangers in the traditional sense as guardians and peacekeepers, (Forest Rangers, etc) rather than Law Enforcement (BLM Rangers, etc.) As members of this community, the ONLY authority we have is what the community gives us; we respect and enact its will. We are a volunteer team of non-confrontational community mediators, facilitators of public safety, first responders, and providers of information. THIS IS OUR ART, our Gift to our community. Others bring sculptures, build the effigy, create art and music; we Ranger. While we are not law enforcement, we do sometimes interface with law enforcement, fire departments, emergency medical services, and other agencies as necessary.");
    var sanctuary = new VolunteerPosition("sanctuary", "you are very good at listening and helping people.", "images/sanctuary.jpg", "sanctuary15@burningflipside.com", "Sanctuary's mission is to support our burn community's mental and emotional well-being. We are staffed by volunteers whose gift to their community is to provide a soft place to land and a ready ear to listen for participants that are disoriented, grieving, and mentally or physically fatigued. Sanctuary is a place of temporary asylum, where burners can find their fun again then take on the city anew.");
    var ice = new VolunteerPosition("ice", "you have the time and energy to provide an important service to the event's attendees.", "images/ice.jpg", "ice15@burningflipside.com", "The Gift Economy rules Burning Flipside,but one commercial product is available: ice!");
    var shaven_ape = new VolunteerPosition("shaven ape", "you are helpful, and like to work physically", "images/apes.png", "apes15@burningflipside.com", "Shaven Apes is an all volunteer department of Burning Flipside responsible for lifting, moving, and fixing things.  Shaven Apes can help with things like Theme Camp setup, Art installations, building your shade structure, and will even help you pitch your tent or just provide transportation. We are there to provide the extra hands (and strong backs) needed to get things done.  Shaven Apes have sometimes been compared to Burning Mans' Department of Public Works (DPW), except that we have a different focus: Shaven Apes are there to directly support Flipside participants, Theme Camps, and Artists.");
    var greeter = new VolunteerPosition("greeter", "you are friendly, outgoing, and just what people need to be welcomed back!", "images/greeter.jpg", "greeters15@burningflipside.com", "Greeters are responsible for making sure that every citizen that comes through the gates into Pyropolis is prepared for this great adventure, edjumacated and welcomed home. This is a high energy, fun way to volunteer and greeters are often a persons first exposure to the principles, the land and the event.");
    var parking = new VolunteerPosition("parking", "you like making sure that the event maintains a break from the outside world, and making sure that service vehicles are logistically viable.", "images/parking.png", "parking15@burningflipside.com", "Parking volunteers supervise the safety and symmetry (we'll try) of all vehicles and trailers parked during Flipside. This isn't JUST ensuring clear paths and preventing double-parking, but it is also an attempt at a collaborative community art project, with the parking lot as the canvas and the cars our paint! ");
    var fire = new VolunteerPosition("fire", "You feel connected to the fire at the event, and you want to make sure the whole thing doesn't burn down", "images/fire.jpg", "fire15@burningflipside.com", "The Pyropolis Fire and Rescue Department monitors fire and life safety throughout the city, responds to uncontrolled wildfires and structure fires, and serves to monitor the effigy burn and any secondary burns to ensure safety.");
    var zone_greeter = new VolunteerPosition("zone greeter", "you like keeping on top of things, and making sure the city gets set up smoothly", "images/cityplanning.jpg", "zonegreeters15@burningflipside.com", "Zone Greeters are our volunteers that welcome theme camps to each of the zones on the map at Flipside. Each Zone Greeter will work with the Zone Greeter Shift Leads during their shift to make sure that people find their theme camp location on the map, show them their camp boundaries and to welcome them to Flipside!");
    var pets = new VolunteerPosition("PETs", "you have the training to make sure that the injured get healed", "images/pets.jpg", "pets15@burningflipside.com", "PETs are Flipside's own medical team!  They are always looking for people capable of helping hurt Flipizens.");
    var sound = new VolunteerPosition("sound", "you are passionate about a sustainable event and are capable of establishing boundaries with the theme camps", "images/sound.jpg", "sound15@burningflipside.com", "Sound at Flipside can come from many places: bullhorns/megaphones, large scale sound systems, drum circles, art installations, and art cars to name a few. Flipside’s sound has long been the most likely reason to endanger our continued presence at any particular location, as well as a potential source for legal citations to be issued against the members of AAR, LLC.");
    var pre_post = new VolunteerPosition("pre/post", "you like being done while the event is going on, are a hard worker, and can get to the land early or leave late", "images/prepost.png", "prepost15@burningflipside.com", "The pre/post team makes sure that the infrastructure for flipside gets assembled and torn down.");
    var work_weekend = new VolunteerPosition("work weekend", "you can be out on the land weeks before the event, helping prepare it for Flipizens!", "images/siteprep.jpg", "workweekends15@burningflipside.com", "In order to make sure everything is ready for Flipside, we have a few work weekends scheduled. Typically, we are doing things like cleaning up trails, removing fallen trees and branches, clearing room for Art, and anything else that needs to get done prior to the event. These are campouts, but the important thing is getting work done. If you're there, you'll be contributing to the work in some way. And don't worry, there's plenty of work for folks of all skills levels. And if you want to learn to do something you've not done before, we'll help you learn how.");
    var web = new VolunteerPosition("technology", "you love the internet.  You're probably trying to hack this page right now", "images/360.png", "technology15@burningflipside.com", "the technology team is responsible for running the burning flipside website, and the computer-related aspects of Flipside's infrastructure");
    var cartelle = new VolunteerPosition("cartelle", "you love bookkeeping and spreadhseets, and you love putting out fires", "images/site_ops.jpg", "cartelle15@burningflipside.com", 'cartelle is the "eschelon for site-ops", responsible for running the inventory of carts and radios and related items for Flipside\'s infrastructure team.');
    var eschelon = new VolunteerPosition("echelon", "you take pride in knowing that the safety teams will have everything they need, and that all of the stuff is where it needs to be", "images/echelon.jpg", "echelon15@burningflipside.com", "Echelon is responsible for handing out radios and accessories to all Safety Teams, as well as maintaining Safety HQ's shaded areas, supplies, and Volunteer laminates.");
    var pyro = new VolunteerPosition("pyro", "you like setting the thing on fire, and putting on a show for the whole event!", "images/daft.jpg", "pyro15@burningflipside.com", "This person is responsible for designing, procuring, and implementing a fireworks show to accompany the burning of the Effigy. This lead or someone on the team will be a trained and licensed pyrotechnician. Lead will assist the Fire Safety and Burn Night Coordination teams in determining whether and when conditions are favorable for a fireworks show. They should also be available to provide input and advice to DaFT team members, if/where pyrotechnology is used in the effigy.");
    var daft = new VolunteerPosition("DaFT", "you are excited about building and art, and are willing to work hard for the event", "images/daft.png", "daft15@burningflipside.com", "The DaFT Lead is responsible for designing the effigy and leading the team that creates it. This position requires a strong commitment to the project, an ability to meet deadlines, ability to manage projects and budgets, and a positive attitude. It is also a good idea to have some design and construction skills. There are many experienced people in the community who are available to help the DaFT Lead. This role will likely take 20-40 hours a week for most of the time from March through May. Construction of the effigy should ideally be finished by Friday of the event, but past years have had DaFT (and especially the lead) working until late Saturday.");
    var guardians = new VolunteerPosition("guardian", "you are dedicated to keeping Flipside as a sustainable event, and make sure that the people at the event belong", "images/guardians.jpg", "guardians15@burningflipside.com", "What is the primary purpose of Guardians? Why do we put so much effort into stopping people from entering the event without having a ticket? Our goal is not to stop people from having a good time. Or because it is not fair for people to enter for free whereas everyone else had to pony up some cash to gain entry. While yes, that last part sucks, it is not the biggest issue. When a gate crasher enters the event, they are trespassing. They have entered the property illegally and have not signed a waiver. This means that the LLC and the landowner can be held responsible if our gatecrasher gets hurt. In the past, at other related events, uninvited guests have entered and attempted to cause harm to attendees. This, we cannot allow. We are here to keep our participants safe as well as preventing people from entering the event and harming themselves.");
    var scribe = new VolunteerPosition("CC Scribe", "you are passionate about communicating issues to the community", "images/flipside_logo.png", "scribewannabe@burningflipside.com", "The Combustion Chamber Scribe, or CC Scribe for short, is a lead positions whose main responsibility is to keep minutes at CC Meetings. As part of taking minutes, the CC Scribe is also expected to keep track of the agenda for future CC meetings.");
    var recycling = new VolunteerPosition("recycling", "you want to limit the landfill footprint of the event, and help provide a service that makes things go more smoothly for everyone", "images/earth_guardians.jpg", "recycling15@burningflipside.com", "Recycling is a volunteer-driven department of Burning Flipside under the Site Sign-Off area which is responsible for coordinating community recycling at Flipside and dropping collected recyclables off at a local recycling facility. Up until 2012, Recycling fell under the Earth Guardians lead position, but Recycling quickly started to take on a life of its own, and so for Flipside 2012, a separate lead position was created for it.");
    var earth_guardians = new VolunteerPosition("earth guardian", "leave no trace is your mantra, and you are out to enforce it", "images/earth_guardians.jpg", "earthguardians15@burningflipside.com", "Earth Guardians are responsible for spreading the word about Leave No Trace practices before, during, and after the event, providing tips and advice for making Flipside more sustainable. Earth guardians work with theme camps to make sure each camp has plans for dealing with trash and recycling. Earth guardians also inspire the community to reduce our ecological impact by embracing sustainability practices. Earth guardians lead by example, working closely with clean-up and recycling teams and walking the event site themselves, reminding all to collect MOOP for proper disposal");
    var flagging = new VolunteerPosition("flagger", "you might want to check out the land a bit early.  you might want to make sure that everyone has a clear and happy time when they show up at the event.  This is why site flagging is a great choice for you", "images/cityplanning.jpg", "maps15@burningflipside.com","The Flagging Lead is responsible for translating the theme camp placement map into actual, flagged boundaries on-site at the event. Flagging generally occurs the weekend before the opening day of the event. The Flagging Lead uses a variety of tools to accurately lay out each theme camp's boundary. The Flagging Lead usually works closely with the Placement Lead and the Cartography Lead to ensure each camp is allocated its proper space. The Flagging Lead also works closely with the InterZone Coordinator prior to the event to resolve boundary issues caused by misplaced flags, absent flags, or improperly measured boundaries.");
    var signs = new VolunteerPosition("city signage", "you like to communicate through your art, and what better way to broadcast this to the community?", "images/cityplanning.jpg", "CitySigns15@burningflipside.com", "The City & Street Signage Lead is responsible for coordinating the creation and installation of all artistic signs to be used at Flipside. While mainly associated with the creation of the year's Street Signs, this position is by no means limited to just that. In fact, many folks could benefit from having some help building and painting their own signs. The ideal person for this position is organized, creative, and excited about creating opportunities for members of the Flipside community to express themselves.");
    var threeSixty = new VolunteerPosition("360/24/7", "you want to be around to help this community when the event isn't going on!", "images/360.png", "off-season15@burningflipside.com", "360/24/7 is the area responsible for all the events that happen during the year that aren't Flipside.  There are 3 events that need hands: Fall Town Hall, Reintegration Celebration : The Burner Bazaar, Spring Town Hall And two \"Getting Ready for Events\" Church Night cleanups: The Church Night or two before Fall Town Hall.  The Church Night or two before Spring Town Hall.  Volunteers are appreciated!");
    var exodus = new VolunteerPosition("exodus", "you have the boundaries necessary to help get people off of the land, which is needed before cleanup can begin in earnest!", "images/exodus.png", "exodus15@burningflipside.com", "The Exodus Lead (formerly GTFO) is tasked with ensuring a safe and orderly exodus from Burning Flipside. Additionally they work with participants and other volunteers to ensure their area is clean and MOOP free prior to leaving.  In specific, in order to begin the restoration efforts necessary to return the land to a pristine state participants not involved must be off the property by the pre-determined time (Monday 5pm). Exodus is empowered ensure this happens!");

// Now, populate the decision tree, bottom to top
    var leave = new QuestionNode("Are you good at clearly communicating boundaries, and telling people things that need to happen?", exodus, ice);
    var rainbows = new QuestionNode("Does it enrage you when people think they're entitled to leave their cars out in the middle of the event?", parking, leave);
    var listening = new QuestionNode("Are you good at listening to people and helping them?", sanctuary, rainbows);
    var safetyOrganizing = new QuestionNode("Does the thought of working with the safety teams excite you?", eschelon, cartelle);
    var excel = new QuestionNode("Does the thought of organizing a bin for the event just give you hives?", listening, safetyOrganizing);
    var createDestroyFire = new QuestionNode("Do you prefer making fires to extinguishing them?", pyro, fire);
    var localEnthusiasm = new QuestionNode("And would you like to be the one to show new Flipizens to their temporary homes?", zone_greeter, greeter);
    var eventEarth=new QuestionNode("Given that attitude about LNT, are you more excited about helping with LNT at the event, or with overall sustainability?", earth_guardians, recycling);
    var leaveNoTrace = new QuestionNode("Of All the community values, do you find leave no trace to be the most important?",eventEarth, excel);
    var inPerson = new QuestionNode("Would you like to show that enthusiasm in person, rather than through art?", localEnthusiasm, signs);
    var enthusiastic = new QuestionNode("Are you enthusiastic about Flipside and do you want to spread that enthusiasm?", localEnthusiasm, listening);    
    var lift = new QuestionNode("Would you be happy to lift heavy items while volunteering?", shaven_ape, guardians);
    var fireFear = new QuestionNode("Do you like being around fire?", createDestroyFire, lift);
//    var rangerSound = new QuestionNode("Do you think sound meters are more awesome than walkie-talkie radios?", sound, ranger);
//    var walk = new QuestionNode("Do you like to promote event sustainability and talk to people?", rangerSound, fireFear);
    var walk = new QuestionNode("Do you like to promote event sustainability and talk to people?", ranger, fireFear);
    var physical = new QuestionNode("Would you prefer your volunteering to be more physical?", walk, listening);
    var medical = new QuestionNode("Do you have medical training (at least CPR certification) that you'd like to use for the event?", pets, physical);
    var weekend = new QuestionNode("Can you go to the flipside land the week before the event?", flagging, threeSixty); 
    var immediately = new QuestionNode("Do you want to do physical labor immediately before and/or after the event?", pre_post, threeSixty);
    var communicateIssues = new QuestionNode("Are you deeply concerned with keeping the community up to date with the issues facing it?", scribe, immediately);
    var labor = new QuestionNode("Do you want to clear poison ivy?", work_weekend, communicateIssues);
    var organize = new QuestionNode("Do you like keeping things organized?", tickets, labor);
    var program = new QuestionNode("Do you like to program?", web, labor);
    var beforeAfter = new QuestionNode("Would you prefer to volunteer before the event, rather than during?", program, medical);
    var effigy = new QuestionNode("You're here to have me tell you you should build the effigy, right?", daft, beforeAfter);
    window.currentNode = effigy;
    window.currentNode.text = "<h2>You enter a dark and scary cave with many forks before it.  Forks filled with volunteering!</h2><p>" + window.currentNode.text + "</p>";
}


/*
Curent tree:   
                  effigy?
................/           \.
             daft          before?
                      /               \
.. .........program?..                 .medical?
  ........./....... \          ..   /......                 .     .\
         web       organize?     pets                               physical?
                   /      \                          /                                  \
           tickets    labor?                     walk?                                      enthusiastic?
                    /     \                    /        \                                     /                         \
           work_week   communicateIssues?     ranger    fireFear                      inPerson?                   leaveNoTrace?
                          /       \                      /        \                    /       \                    /                     \
                      scribe    immediately?      create?       lift?        localEnthusiasm? signs           eventEarth?                excel?
                                   /   \           /     \        /\                 /    \                  /      \                 /                   \
                                prepost weekend?     pyro     fire  apes guardians zone_greeter greeter earth_gua   recycling     listening?          safetyOrg?  
                                           /  \                                                                                    /        \               /          \
                                         flag  360                                                                          sanctuary    rainbows?    eschelon     cartelle    
                                                                                                                                        /       \
                                                                                                                                     Parking     leave?
                                                                                                                                                /       \
                                                                                                                                              exodus    ice
*/