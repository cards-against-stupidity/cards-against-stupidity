package org.wcci.cardsagainststupidity;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.cardsagainststupidity.models.Card;
import org.wcci.cardsagainststupidity.models.Deck;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.storage.CardStorage;
import org.wcci.cardsagainststupidity.storage.DeckStorage;
import org.wcci.cardsagainststupidity.storage.TopicStorage;

@Component
public class Populator implements CommandLineRunner {
    
    
    private CardStorage cardStorage;
    
    private DeckStorage deckStorage;
    
    private TopicStorage topicStorage;
    
    public Populator(CardStorage cardStorage, DeckStorage deckStorage, TopicStorage topicStorage) {
        this.cardStorage = cardStorage;
        this.deckStorage = deckStorage;
        this.topicStorage = topicStorage;
        
    }
    
    @Override
    public void run(String... args) {
        
        Topic tech = new Topic("Tech");
        topicStorage.save(tech);
        
        Deck javaDeck = new Deck("Java", tech);
        deckStorage.save(javaDeck);
        
        Card abstrct = new Card("Abstract", "Specifies that a class is not to be instantiated but rather inherited by other classes", javaDeck);
        cardStorage.save(abstrct);
        Card api = new Card("Application Programming Interface", "Specification of how a programmer writing an application accesses the behavior and state of classes and objects", javaDeck);
        cardStorage.save(api);
        Card argument = new Card("Argument", "A data item specified in a method call; Can be a literal value, a variable, or an expression", javaDeck);
        cardStorage.save(argument);
        Card array = new Card("Array", "Collection of data items, all of the same type, which each item's position is uniquely designated by an integer", javaDeck);
        cardStorage.save(array);
        Card bit = new Card("Bit", "Smallest unit of information in a computer, with a value of either 0 or 1", javaDeck);
        cardStorage.save(bit);
        Card block = new Card("Block", "Any code between matching braces", javaDeck);
        cardStorage.save(block);
        Card bolean = new Card("Boolean", "An expression or variable that can have only a true or false value", javaDeck);
        cardStorage.save(bolean);
        Card clss = new Card("Class", "A user defined blueprint or prototype from which objects are created", javaDeck);
        cardStorage.save(clss);
        Card constructor = new Card("Constructor", "A special method which initializes instances (objects) of that class", javaDeck);
        cardStorage.save(constructor);
        Card dble = new Card("Double", "A variable which can hold very large or small numbers, also holds floating point values", javaDeck);
        cardStorage.save(dble);
        Card encapsulation = new Card("Encapsulation", "A mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit", javaDeck);
        cardStorage.save(encapsulation);
        Card flt = new Card("Float", "Defines a floating point number variable", javaDeck);
        cardStorage.save(flt);
        Card gui = new Card("Graphical User Interface", "Refers to the techniques involved in using graphics, along with a keyboard and a mouse, to provide an easy-to-use interface to some program", javaDeck);
        cardStorage.save(gui);
        Card implmnts = new Card("Implements", "Means you are using the elements of a Java interface in your class", javaDeck);
        cardStorage.save(implmnts);
        Card java = new Card("Java", "A set of technology for creating and safely running software programs in both stand-alone and networked environments", javaDeck);
        cardStorage.save(java);
        Card method = new Card("Method", "A set of code which is referred to by name and can be called at any point in a program simply by utilizing the method's name", javaDeck);
        cardStorage.save(method);
        
    }
}
