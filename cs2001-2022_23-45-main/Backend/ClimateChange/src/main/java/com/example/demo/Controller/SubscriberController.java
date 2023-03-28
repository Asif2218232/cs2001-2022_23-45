package com.example.demo.Controller;

import com.example.demo.Model.Subscriber;
import com.example.demo.Service.SubscriberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubscriberController {

    @Autowired
    private SubscriberService subscriberService;

    @PostMapping("/api/subscribe")
    public ResponseEntity<Subscriber> subscribe(@RequestBody Subscriber subscriber) {
        Subscriber savedSubscriber = subscriberService.saveSubscriber(subscriber);
        return ResponseEntity.ok(savedSubscriber);
    }
}
