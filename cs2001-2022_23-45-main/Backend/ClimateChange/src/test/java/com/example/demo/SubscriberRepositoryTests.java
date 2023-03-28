package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import com.example.demo.Model.Subscriber;
import com.example.demo.Repository.SubscriberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Rollback(false)
public class SubscriberRepositoryTests {

    @Autowired
    private SubscriberRepository repo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testSaveSubscriber() {
        String email = "test@example.com";
        Subscriber subscriber = new Subscriber();
        subscriber.setEmail(email);

        Subscriber savedSubscriber = repo.save(subscriber);

        Subscriber existSubscriber = entityManager.find(Subscriber.class, savedSubscriber.getId());

        assertThat(existSubscriber.getEmail()).isEqualTo(subscriber.getEmail());
    }
}
