package org.wcci.cardsagainststupidity.controllers;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.wcci.cardsagainststupidity.models.Topic;
import org.wcci.cardsagainststupidity.models.User;
import org.wcci.cardsagainststupidity.storage.TopicStorage;
import org.wcci.cardsagainststupidity.storage.UserStorage;
import org.wcci.cardsagainststupidity.validator.UserValidator;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class UserControllerTests {
    
    private UserController underTest;
    private UserStorage mockStorage;
    private UserValidator mockUserValidator;
    private TopicStorage mockTopicStorage;
    private MockMvc mockMvc;
    private User testUser;
    
    @BeforeEach
    void setUp() {
        mockStorage = mock(UserStorage.class);
        mockUserValidator = mock(UserValidator.class);
        mockTopicStorage = mock(TopicStorage.class);
        underTest = new UserController(mockStorage, mockUserValidator, mockTopicStorage);
        mockMvc = MockMvcBuilders.standaloneSetup(underTest).build();
        testUser = new User("Test123", "test", "test");
    }
    
    @Test
    void shouldGetAllUsers() throws Exception {
        mockMvc.perform(get("/users"))
                .andExpect(status().isOk());
        
        verify(mockStorage).findAll();
    }
    
    @Test
    void shouldLogInUser() throws Exception {
        mockStorage.save(testUser);
        
        assertFalse(testUser.isLoggedIn());
        
        when(mockStorage.findByUsernameAndPassword(testUser.getUsername(),
                testUser.getPassword())).thenReturn(Optional.of(testUser));
        
        mockMvc.perform(post("/auth/login")
                .param("username", testUser.getUsername())
                .param("password", testUser.getPassword()))
                .andExpect(status().is2xxSuccessful());
        
        verify(mockStorage).findByUsernameAndPassword(testUser.getUsername(),
                testUser.getPassword());
        
        User loggedInUser =
                mockStorage.findByUsernameAndPassword(testUser.getUsername(),
                        testUser.getPassword()).get();
        
        assertTrue(loggedInUser.isLoggedIn());
    }
    
    @Test
    void shouldSaveTopicToUser() throws Exception {
        Topic newTopic = new Topic("Test");
        
        when(mockTopicStorage.findTopicByTitle("Test")).thenReturn(Optional.of(newTopic));
        
        when(mockStorage.findByUsername("Test123")).thenReturn(Optional.of(testUser));
        
        mockMvc.perform(put("/users/Test123/Test"))
                .andExpect(status().is2xxSuccessful());
        
        assertThat(testUser.getTopics()).contains(newTopic);
    }
}
