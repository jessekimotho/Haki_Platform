// Conversation data structure - defines all steps in the learning journey
export interface ConversationStep {
	audioToPause: string;
	audioToPlay: string;
	content: string;
	speaker: string;
	animation?: string;
	nextState: string;
}

export const conversationSteps: Record<string, ConversationStep> = {
	// Module 1 - Introduction
	'first-next': {
		audioToPause: 'taj1v1',
		audioToPlay: 't1v2',
		content: "Children's rights are special laws that protect children and keep us safe and happy.<br><br>A child is anyone under the age of 18!",
		speaker: 'temi',
		animation: 'bounceOut',
		nextState: 'seconde-next'
	},
	'seconde-next': {
		audioToPause: 't1v2',
		audioToPlay: 't1v3',
		content: "Children's rights belong to all children everywhere even though they dont come from the same country as you, or don't have the same color as you or don't go to the same place of worship as you.",
		speaker: 'taji',
		nextState: 'thirde-next'
	},
	'thirde-next': {
		audioToPause: 't1v3',
		audioToPlay: 't1v4',
		content: "Do you know how many children's rights there are? There are quite a number!",
		speaker: 'temi',
		nextState: 'fourthe-next'
	},
	'fourthe-next': {
		audioToPause: 't1v4',
		audioToPlay: 't1v5',
		content: "I know! I know! I can name a very important one – All children have a right to survive and develop.<br><br>It means that all children have a right to live, to survive, to be protected and to grow.",
		speaker: 'taji',
		animation: 'bounceIn',
		nextState: 'fifthe-next'
	},
	'fifthe-next': {
		audioToPause: 't1v5',
		audioToPlay: 't1v6',
		content: "Other rights include: A right to education. Education should develop each child's personality and talents to the fullest.",
		speaker: 'temi',
		nextState: 'sixthe-next'
	},
	'sixthe-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "A right to quality healthcare, clean water, nutritious food and a clean evironment so that we can all stay healthy.",
		speaker: 'temi',
		nextState: 'sixthe-p1-next'
	},
	'sixthe-p1-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Also a right to protection from violence, abuse or neglect from their parents or anyone else who looks after them.",
		speaker: 'temi',
		nextState: 'sixthe-p2-next'
	},
	'sixthe-p2-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes,<br>As a child you have a right to a Name and a family. Also have a right to say what you think should happen when adults are making decisions about you.",
		speaker: 'temi',
		nextState: 'sixthe-p3-next'
	},
	'sixthe-p3-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "My favourite game is tag which I play with my friend Halima. Halima is a refugee from Congo",
		speaker: 'temi',
		nextState: 'sixthe-p4-next'
	},
	'sixthe-p4-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Do you know children who come into a country as refugees such as Halima have the same rights as children who are born in that country?",
		speaker: 'temi',
		nextState: 'sixthe-p5-next'
	},
	'sixthe-p5-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Oh really Tami! I did not know that. So, does that mean that Halima has a right to quality education like me? ",
		speaker: 'temi',
		nextState: 'sixthe-p6-next'
	},
	'sixthe-p6-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes Taji. You are correct. All children have rights. <br><br>Do you also know that children in countries affected by war should receive special protection?.",
		speaker: 'temi',
		nextState: 'sixthe-p7-next'
	},
	'sixthe-p7-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "I think I remember hearing that somewhere. So that also means children have the right to information. ",
		speaker: 'temi',
		nextState: 'sixthe-p8-next'
	},
	'sixthe-p8-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes, that is why we are learning about our rights on Haki.",
		speaker: 'temi',
		nextState: 'sixthe-p9-next'
	},
	'sixthe-p9-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Are there any other rights Tami?",
		speaker: 'temi',
		nextState: 'sixthe-p10-next'
	},
	'sixthe-p10-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes, children have so many rights.You can learn  more about them on the African Children's Committee's website, on www.acewrc.africa. Or you ask your teachers at school.",
		speaker: 'temi',
		nextState: 'sixthe-p11-next'
	},
	'sixthe-p11-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Taji, Do you know who is responsible for  making sure that children's  rights are kept?",
		speaker: 'temi',
		nextState: 'six-p1-next'
	},
	'six-p1-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "I think Mummy, Daddy, Teacher , the Chief, the police And most of all the president.",
		speaker: 'temi',
		nextState: 'six-p2-next'
	},
	'six-p2-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes, Yes, Yes, It is the job of the entire community to make sure that children's  rights are protected",
		speaker: 'temi',
		nextState: 'six-p3-next'
	},
	'six-p3-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "The community is also made up of everyone! Parents, children, neighbors, the police, the government and many other people",
		speaker: 'temi',
		nextState: 'six-p4-next'
	},
	'six-p4-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "But Temi,  do I have to do anything to also make sure my community is happy and safe?",
		speaker: 'temi',
		nextState: 'six-p5-next'
	},
	'six-p5-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: "Yes. You can be  respectful to your parents and other children as you play together",
		speaker: 'temi',
		nextState: 'six-p6-next'
	},
	'six-p6-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Ok. So tell me,  how do people take away your rights?",
		speaker: 'temi',
		nextState: 'six-p7-next'
	},
	'six-p7-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " People can take away your rights when they don't allow you to do things which will help you grow as a child. For example, when they Stop you from going to school, they take away your right to an education",
		speaker: 'temi',
		nextState: 'six-p8-next'
	},
	'six-p8-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Also When you are sick and not taken to the hospital or given  medicine, they take away your right to a good health",
		speaker: 'temi',
		nextState: 'six-p9-next'
	},
	'six-p9-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " What about when I am helping my mummy in the farm, is she taking away my rights?",
		speaker: 'temi',
		nextState: 'six-p10-next'
	},
	'six-p10-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Not at all Taji,<br>You can help your mummy in the farm, but if helping your mum stops you from going to school or the work becomes too much for you and causes you to become injured or get sick,<br> Then yes, your rights have been taken away",
		speaker: 'temi',
		nextState: 'six-p11-next'
	},
	'six-p11-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Also, if you are asked or forced to work and someone else gets paid to make you work, that is called child exploitation.",
		speaker: 'temi',
		nextState: 'six-p12-next'
	},
	'six-p12-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Do you also know that no one is allowed to  touch you without your permission?",
		speaker: 'temi',
		nextState: 'six-p13-next'
	},
	'six-p13-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " What do you mean Tami? So my mommy and aunty can't touch or hug me?",
		speaker: 'temi',
		nextState: 'six-p14-next'
	},
	'six-p14-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Not that way Taji, what I mean is that no one is allowed to  touch you inappropriately.<br><br> This  means that  no one should  touch your private parts or tell you to remove your clothes or take a photo of yourself while you are naked.",
		speaker: 'temi',
		nextState: 'six-p15-next'
	},
	'six-p15-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Really Tami? I didn't know. What right would that be?.",
		speaker: 'temi',
		nextState: 'six-p16-next'
	},
	'six-p16-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " It is your right to privacy and when they touch you it is called sexual abuse and sexual exploitation",
		speaker: 'temi',
		nextState: 'six-p17-next'
	},
	'six-p17-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Thank you Tami, Now I Know...Tami, Is that all about child rights violations?",
		speaker: 'temi',
		nextState: 'six-p18-next'
	},
	'six-p18-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Yes, we are Finished for now! Remember it is very important to learn about your rights. This will make it easy for you to know when someone has taken away your rights",
		speaker: 'temi',
		nextState: 'six-p19-next'
	},
	'six-p19-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Yes, we are Finished for now! Remember it is very important to learn about your rights. This will make it easy for you to know when someone has taken away your rights",
		speaker: 'temi',
		nextState: 'six-p20-next'
	},
	'six-p20-next': {
		audioToPause: 't1v6',
		audioToPlay: 't1v7',
		content: " Also remember it is the  responsibility of all people in a community, including the President, to make sure all children  enjoy their rights!",
		speaker: 'temi',
		nextState: 'seventh-p1-next'
	}
};
