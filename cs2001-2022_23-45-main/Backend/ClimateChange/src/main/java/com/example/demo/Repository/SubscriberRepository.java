package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Subscriber;


public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
}
