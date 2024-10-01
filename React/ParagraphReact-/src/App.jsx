import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './navbar'

const paragraphs = [
    "1. Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
    
    "2. Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",
    
    "3. Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
    
    "4. Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.",
    
    "5. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",
    
    "6. Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.",
    
    "7. Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.",
    
    "8. Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.",
    
    "9. Tiramisu pastry chocolate bar cake marzipan bear claw cotton candy cheesecake ice cream jelly-o carrot cake. Chocolate bar sesame snaps cotton candy tootsie roll jelly beans danish. Croissant pudding gummi bears chocolate tart dragée sweet roll sweet roll tiramisu cheesecake. Lollipop muffin jujubes cookie carrot cake jujubes chocolate sesame snaps gummies halvah.",
    
    "10. Twee man bun yuccie direct trade, readymade viral banh mi ramps artisan pinterest af chillwave deep v hoodie everyday carry gluten-free gentrify. Echo park stumptown blue bottle pinterest biodiesel scenester cliche chicharrones ethical street art humblebrag fingerstache pop-up. Thundercats pok pok roof party, disrupt brunch godard kombucha next level gluten-free retro health goth everyday carry viral meggings copper mug echo park.",
    
    "11. Candy canes cheesecake jelly-o brownie cupcake tart jelly beans sugar plum pie chocolate cake lemon drops ice cream. Marshmallow soufflé lollipop muffin dragée candy canes pie sweet chocolate bar brownie tart danish. Sweet roll sugar plum marshmallow cookie sesame snaps croissant bear claw lemon drops cotton candy marzipan jelly beans.",
    
    "12. Paleo leggings biodiesel, beard kombucha kickstarter mixtape meggings. Tumeric pinterest unicorn tacos fam marfa hammock raclette fingerstache air plant direct trade waistcoat bitters four loko selfies. Seitan chicharrones affogato everyday carry, keytar kombucha copper mug man braid four loko kickstarter squid.",
    
    "13. Beard tacos air plant, listicle dreamcatcher glossier franzen bespoke blue bottle next level. Fixie shoreditch jean shorts tofu art party PBR&B beard sriracha. Green juice franzen gluten-free four loko echo park distillery tacos. Small batch kale chips art party four loko chillwave flannel kombucha subway tile.",
    
    "14. Sweet chocolate croissant danish soufflé jelly sweet muffin. Pastry bear claw jujubes cotton candy cake croissant cupcake ice cream chocolate cake sugar plum. Gummi bears pudding cheesecake croissant oat cake donut tiramisu bear claw cake cookie chocolate tart jujubes.",
    
    "15. Artisan schlitz freegan migas, stumptown cold-pressed hot chicken typewriter bushwick kombucha biodiesel. Fixie poutine sriracha narwhal drinking vinegar. Lomo man bun vinyl edison bulb pork belly tbh subway tile fixie yuccie farm-to-table deep v."
];



const App = () => {
  const [text, setText] = useState([""]);
  const [number, setNumber] = useState(0); 

  const Generate = () => {
    console.log("button clicked");
    const selectedParagraphs = paragraphs.slice(0, number); 
    setText(selectedParagraphs);
};

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value); 
    if(e.target.value>15){
      alert("Aeeeee bro holdd up ask for a smaller valuee ")
    }
    else if(e.target.value < 0){
      alert("Aeeeee bro negative !!! Are you kidding me ")
    }
    else{
      setNumber(value); 
    }
    
  };

  return (
    <>
      <Nav />
      <br />
      <br />
      <h1 id='h1'>Tired of boring lorem ipsum?</h1>
      <br />
      <div id="inputDiv">
        <h3>Select number of Paragraphs</h3>
        <input type="number" id="input" onChange={handleInputChange} value={number} />
        <button id="generateBtn" onClick={Generate}>Generate</button>
      </div><br /><br />
      <div id='textApp'>
          {text.map((para, index) => (
            <>
              <p key={index}>{para}</p> 
              <br />
            </> 
          ))}
      </div>
    </>
  );
};

export default App



