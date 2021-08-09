PennController.ResetPrefix(null); // Shorten command names (keep this line here))

// DebugOff()   // Uncomment this line only when you are 100% done designing your experiment
function Pick(set,n) {
    assert(set instanceof Object, "First argument of pick cannot be a plain string" );
    n = Number(n);
    if (isNaN(n) || n<0) n = 0;
    this.args = [set];
    set.remainingSet = null;
    this.run = function(arrays){
        if (set.remainingSet===null) set.remainingSet = arrays[0];
        const newArray = [];
        for (let i = 0; i < n && set.remainingSet.length; i++)
            newArray.push( set.remainingSet.shift() );
        return newArray;
    }
}
function pick(set, n) { return new Pick(set,n); } 
// First show instructions, then experiment trials, send results and show end screen
Sequence("intro", "Fullscreen", "instructions1", "instructions2", "Demographic Data", randomize("exercise"), "instructions3",
        pick(randomize("experiment"), 20 ), "Break"
        ,
        pick(randomize("experiment"), 20 ), "Break"
        ,
        pick(randomize("experiment"), 20 )

    ,
SendResults(), "end");
//Note: Put "Angaben" back into the sequence before the exercise

// This is run at the beginning of each trial
Header(
)
.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true)
// Instructions

newTrial("intro", 
    defaultText.center().print()
    ,
    newText("<h2>Before we begin...")    
    ,
    newText("<p>Please set your browser zoom to Default (100%) and keep it that way during the experiment. ")
    ,
    newText("<b>Windows/Linux:</b> Press [Ctrl]+[0] on your keyboard or use [Ctrl]+[+] and [Ctrl]+[-] until your zoom is set to 100%.")
    ,
    newText("<p><b>Mac OS X</b>: Use [⌘]+[+] and [⌘]+[-] until your zoom is set to 100%.")
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
    ,
    newFunction( ()=> {
      if (document.documentElement.requestFullscreen)
        document.documentElement.requestFullscreen();
      else if (document.documentElement.mozRequestFullScreen) /* Firefox */
        document.documentElement.mozRequestFullScreen();
      else if (document.documentElement.webkitRequestFullscreen) /* Chrome, Safari, Opera */
        document.documentElement.webkitRequestFullscreen();
      else if (document.documentElement.msRequestFullscreen) /* IE/Edge */
        document.documentElement.msRequestFullscreen();
    })
    .call()
)
newTrial("Fullscreen", 
    defaultText.center().print()
    ,
    newText("<h2>Before we begin...")    
    ,
    newText("<p>Please allow this website to switch to fullscreen mode. In case it did not work, please manually switch to fullscreen mode now.")
    ,
    newText("<b>Windows/Linux:</b> Press [F11] on your keyboard in order to switch to fullscreen mode.")
    ,
    newText("<p><b>Mac OS X</b>: Press [Ctrl]+[⌘]+[F] on your keyboard in order to switch to fullscreen mode.")
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)
    ,
newTrial("instructions1",
     // Automatically print all Text elements, centered
    defaultText.center()
    ,
    newText("<h2>Welcome!</h2>").print()
    ,
    newText("<p>This experiment investigates how readers process written sentences in the English language. \
        In the experiment, you will see sentences of which at any given time only a little part will be appearing \
        on the screen piece-by-piece. The rest of the sentence will be masked by dashes. The visible part will \
        move through the sentence as you read along. To read the next segment, you will have to press [Spacebar] on your keyboard.")
        .print()
    ,
    newText("Here is an example. First, the sentence appears completely masked:")
        .print()
    ,
    newText("<span class=\"DashedSentence-sentence\">\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        The</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">president</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        gave</span></span> </span>\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">a</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        speech</span></span>.")
        .print()
    ,
    newText("After pressing [Spacebar], the first segment will appear: ")
        .print()
    ,
    newText("<span class=\"DashedSentence-sentence\">\
        The president \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        gave</span></span> </span>\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">a</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        speech</span></span>.</span>")
        .print()
        ,
    newText("By pressing [Spacebar] again, you'll get to see the next segment: ")
        .print()
    ,
    newText("<span class=\"DashedSentence-sentence\">\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        The</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">president</span></span> \
        gave </span>\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">a</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        speech</span></span>.</span>")
        .print()
    ,
    newText("After the next button press, the last segment will be displayed: ")
        .print()
    ,
    newText("<span class=\"DashedSentence-sentence\">\
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        The</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">president</span></span> \
        <span class=\"DashedSentence-ospan\">\
        <span class=\"DashedSentence-ispan\">\
        gave</span></span> </span>\
        a \
        speech.</span>")
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)
.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true)
newTrial("instructions2",
     // Automatically print all Text elements, centered
    defaultText.center().print()
    ,
    newText("<p>After reading a sentence, you will sometimes receive a question about its content.\
    Two possible answers will be provided. Please select the correct answer by pressing either [F] \
    for the answer on the left or [J] for the answer on the right. \
    After providing a response, the next trial will start automatically. ")
    ,
    newText("<p>Please read as fast as possible while also making sure that you understand the content. \
    Please keep your right index finger on the [Spacebar] and leave it there during reading. \
    The experiment consists of four blocks with 40 sentences each. If you get tired, \
    feel free to take a break at the beginning of a trial or between blocks. ")
    ,
    newText("<p>First, there will be a short practice session with eight trials. \
    During the practice session, you will receive feedback but in the experiment there will be none. Have fun! ")
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
)
.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true)
newTrial( "Demographic Data" , 
newText("Headline", "<h2>Demographic Data</h2>").center().print()
    ,
    newTextInput("inputAge")
    .size("100px")
    ,
    newScale("inputGender", "male", "female", "other")
    .vertical()
    ,
    newScale("inputHandedness", "left-handed", "right-handed")
    .vertical()
    ,
    newTextInput("inputBorn")
    ,
    newTextInput("inputResidence")
    ,
    newScale("inputEnglish", "Yes", "No")
    .vertical()
    ,
    newTextInput("inputFirstLanguage")
    ,
    newTextInput("inputProlific-ID")
    ,
    newCanvas("Canvas", 600, 400)
        .add( 0,    0,  newText("Age:").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  0,  getTextInput("inputAge").log())
        .add( 0,    40,  newText("Gender:"))
        .add( 400,  40,  getScale("inputGender").log())
        .add( 430,  38,  newText("male"))
        .add( 430,  58,  newText("female"))
        .add( 430,  78,  newText("other"))
        .add( 0,    120,  newText("Handedness:"))
        .add( 400,  120,  getScale("inputHandedness").log())
        .add( 430,  118, newText("left-handed"))
        .add( 430,  138, newText("right-handed"))
        .add( 0,    180,  newText("Born in (country or state):").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  180,  getTextInput("inputBorn").log())
        .add( 0,    220,  newText("Current residency (country or state):").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  220,  getTextInput("inputResidence").log())
        .add( 0,    260, newText("English as first language?"))
        .add( 400,  260, getScale("inputEnglish").log())
        .add( 430,  258, newText("Yes"))
        .add( 430,  278, newText("No"))
        .add( 0,    320, newText("First languages other than English:").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  320, getTextInput("inputFirstLanguage").log())
        .add( 0,    360, newText("Prolific-ID:").cssContainer("padding", "10px 0px 0px"))
        .add( 400,  360, getTextInput("inputProlific-ID").log())
        .center()
        .print()
    ,
    newText("Warnung1", "Please fill in the required fields")
        .color("red")
        .italic()
        .center()
        .hidden()
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait(
            getTextInput("inputAge").test.text(/.+/)
            .and(getTextInput("inputBorn").test.text(/.+/))
            .and(getTextInput("inputResidence").test.text(/.+/))
            .and(getTextInput("inputProlific-ID").test.text(/.+/))
            .and(getScale("inputGender").test.selected())
            .and(getScale("inputHandedness").test.selected())
            .and(getScale("inputEnglish").test.selected())
                .failure(
                    getText("Warnung1")
                    .hidden()
                    ,
                    newTimer(100)
                    .start()
                    .wait()
                    ,
                    getText("Warnung1").visible() )
                    )
    ,
    newVar("Age")
        .global()
        .set( getTextInput("inputAge") )
    ,
    newVar("Born")
        .global()
        .set( getTextInput("inputBorn") )
    ,
    newVar("Residence")
        .global()
        .set( getTextInput("inputResidence") )
    ,
    newVar("FirstLanguage")
        .global()
        .set( getTextInput("inputFirstLanguage") )
    ,
    newVar("Prolific-ID")
        .global()
        .set( getTextInput("inputProlific-ID") )
        ,
    newVar("Gender")
        .global()
        .set( getScale("inputGender") )
    ,
    newVar("Handedness")
        .global()
        .set( getScale("inputHandedness") )
    ,
    newVar("English")
        .global()
        .set( getScale("inputEnglish") )
    )
    .log("Age", getVar("Age"))
    .log("Gender", getVar("Gender"))
    .log("Handedness", getVar("Handedness"))
    .log("Born", getVar("Born"))
    .log("Residence", getVar("Residence"))
    .log("English", getVar("English"))
    .log("FirstLanguage", getVar("FirstLanguage"))
    .log("Prolific-ID", getVar("Prolific-ID"))
.setOption("countsForProgressBar", false)
.setOption("hideProgressBar", true)

// First experiment trial

dashed = (name,sentence) => [
    newText(name,"").css({display:'flex','flex-direction':'row','flex-wrap':'wrap','line-height':'2em','max-width':'100vw'}).center().print()
    ,
    ...sentence.split(/[*<>]+/).map( (w,i) => (w=="br"?
            newText("").css("width","100vw").print(getText(name))
            :
            newText(name+'-'+i, w.replace(/([^.,?:;!\s])/g,"<span class='DashedSentence-ospan'><span class='DashedSentence-ispan'>$1</span></span>"))
                .css({margin:"0em 0.2em",'font-family':'monospace',"font-size":"large"})
                .print(getText(name))
    ))
    ,
    newKey(name+'-start', " ").log().wait() // first keypress, to reveal first chunk
    ,
    ...sentence.split(/[*<>]+/).map((w,i)=>(w!="br"?[
        getText(name+'-'+i).text(w) // reveal chunk
        ,
        newKey(i+"-"+w," ").log().wait() // wait for keypress
        ,
        getText(name+'-'+i).text(w.replace(/([^.,?:;!\s])/g,"<span class='DashedSentence-ospan'><span class='DashedSentence-ispan'>$1</span></span>")) // hide chunk
    ]:null))
]
Template( "exercise.csv" , 
    row => newTrial( "exercise",
    dashed("myDashed",  row.Sentence)
    ,
    getText("myDashed").remove()
    //,
    //newButton("Finish").print().wait()
        ,
        newText("Question", row.Question)
        .center()
        .print()
        ,
        getText("Question")
        .test.text( /\?$/ ) //Previously, this field contained " " and the instructions for failure and success were reversed
           .failure( newTimer(500).start().wait()) 
           .success(
                newText("AnswerL", row.AnswerL)
                    .print()
                    .after(newText("AnswerR", row.AnswerR)
                        .print())
                ,
                newText("F", "<b>[F]</b>")
                ,
                newText ("J", "<b>[J]</b>")
                ,
                newCanvas("Canvas", 600, 200)
                .add(0, 0, getText("AnswerL"))
                .add(400, 0, getText("AnswerR"))
                .add(0, 50, getText("F"))
                .add(400, 50, getText("J"))
                .center()
                .print()
                ,
                newSelector("Answer")
                .add( getText("AnswerL")   , getText("AnswerR") )
                .keys(     "F"           ,        "J"           )
                .print()
                .log()
                .wait()
                )
    )
    .log("Age", getVar("Age"))
    .log("Gender", getVar("Gender"))
    .log("Handedness", getVar("Handedness"))
    .log("Born", getVar("Born"))
    .log("Residence", getVar("Residence"))
    .log("English", getVar("English"))
    .log("FirstLanguage", getVar("FirstLanguage"))
    .log("Prolific-ID", getVar("Prolific-ID"))
    .log("Experiment", row.Experiment)
    .log("Sentence", row.Sentence) 
);

newTrial("instructions3",
     // Automatically print all Text elements, centered
    defaultText.center()
    ,
    newText("Experiment").print()
    ,
    newText("<p>Well done! The practice session is done. We will now continue with the actual experiment.")
        .print()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
    )    
// Second, more concise experiment trial
Template( "subco_english_acc6.csv" , 
    row => newTrial( "experiment",
    dashed("myDashed",  row.Sentence)
    ,
    getText("myDashed").remove()
    //,
    //newButton("Finish").print().wait()
        ,
        newText("Question", row.Question)
        .center()
        .print()
        ,
        getText("Question")
        .test.text( /\?$/ ) //Previously, this field contained " " and the instructions for failure and success were reversed
           .failure( newTimer(500).start().wait()) 
           .success(
                newText("AnswerL", row.AnswerL)
                    .print()
                    .after(newText("AnswerR", row.AnswerR)
                        .print())
                ,
                newText("F", "<b>[F]</b>")
                ,
                newText ("J", "<b>[J]</b>")
                ,
                newCanvas("Canvas", 600, 200)
                .add(0, 0, getText("AnswerL"))
                .add(400, 0, getText("AnswerR"))
                .add(0, 50, getText("F"))
                .add(400, 50, getText("J"))
                .center()
                .print()
                ,
                newSelector("Answer")
                .add( getText("AnswerL")   , getText("AnswerR") )
                .keys(     "F"           ,        "J"           )
                .print()
                .log()
                .wait()
                )
    )
    .log("Age", getVar("Age"))
    .log("Gender", getVar("Gender"))
    .log("Handedness", getVar("Handedness"))
    .log("Born", getVar("Born"))
    .log("Residence", getVar("Residence"))
    .log("English", getVar("English"))
    .log("FirstLanguage", getVar("FirstLanguage"))
    .log("Prolific-ID", getVar("Prolific-ID"))
    .log("Experiment", row.Experiment)
    .log("Sentence", row.Sentence) 
    .log("Item", row.Item)
    .log("List", row.List)
    .log("Content", row.Content) 
    .log("No", row.No) 
    .log("Yes", row.Yes)
    .log("Group", row.Group)
    .log("Question", row.Question)
    .log("AnswerL", row.AnswerL)
    .log("AnswerR", row.AnswerR)
    .log("Correct", row.Correct)
);

newTrial("Break",
    newText("<h2<Break</h2>")
        .center()
        .print()
    ,
    newText("<p>Feel free to take a quick break from the experiment now. Click \"Continue\" whenever you feel ready.</p>")
        .print()
        .center()
    ,
    newButton("Continue")
        .center()
        .print()
        .wait()
);

// Final screen
newTrial("end",
    newFunction( ()=> {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozCancelFullScreen) /* Firefox */
                document.mozCancelFullScreen();
            else if (document.webkitExitFullscreen) /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen) /* IE/Edge */
                document.msExitFullscreen();
        }).call() //Verlaesst Vollbild-Modus des Browsers
    ,
    newText("Thank you for your participation!")
        .center()
        .print()
    ,
    // This link a placeholder: replace it with a URL provided by your participant-pooling platform
    newText("<p><a href='https://www.pcibex.net/' target='_blank'>Click here to validate your submission</a></p>")
        .center()
        .print()
    ,
    // Trick: stay on this trial forever (until tab is closed)
    newButton().wait()
)
.setOption("countsForProgressBar",false)